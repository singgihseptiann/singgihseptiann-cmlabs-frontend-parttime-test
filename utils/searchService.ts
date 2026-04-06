// lib/mealService.ts
import { fetchApi } from "./fetchApi";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// ─────────────────────────────────────────────
// Ingredient list: rarely changes → cache forever,
// revalidate once a day. Remove the manual variable cache
// since Next.js handles this at the fetch level.
// ─────────────────────────────────────────────
export async function getAllAvailableIngredients() {
  try {
    const res = await fetchApi("http://www.themealdb.com/api/json/v1/1/list.php?i=list", {
      next: {
        revalidate: 86400, // revalidate every 24 hours
        tags: ["ingredients"], // lets you call revalidateTag("ingredients") manually
      },
    });

    return Array.isArray(res.data?.meals) ? res.data.meals : [];
  } catch (error) {
    console.error("Error fetching ingredients:", error);
    return [];
  }
}

// ─────────────────────────────────────────────
// Search/filter is derived from the cached list above,
// no extra fetch needed — no cache config required here.
// ─────────────────────────────────────────────
export async function searchIngredients(query?: string, offset: number = 0) {
  try {
    const allIngredients = await getAllAvailableIngredients();

    const filtered = query ? allIngredients.filter((i: any) => i.strIngredient.toLowerCase().includes(query.toLowerCase())) : allIngredients;

    const itemsPerPage = 10;
    const page = filtered.slice(offset, offset + itemsPerPage);

    return {
      ingredients: page,
      total: filtered.length,
      hasMore: offset + itemsPerPage < filtered.length,
    };
  } catch (error) {
    console.error("Error in searchIngredients:", error);
    throw error;
  }
}

// ─────────────────────────────────────────────
// Meal search: user-driven queries change often →
// shorter revalidation window (10 minutes).
// ─────────────────────────────────────────────
export async function searchMealsByIngredient(ingredientName: string, query?: string) {
  if (query) {
    const res = await fetchApi(`http://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`, {
      next: {
        revalidate: 600, // 10 minutes
        tags: [`meals-search-${query}`],
      },
    });

    return Array.isArray(res.data?.meals) ? res.data.meals : [];
  }

  // Filter by ingredient — same short TTL
  let res = await fetchApi(`http://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(ingredientName)}`, {
    next: {
      revalidate: 600,
      tags: [`meals-ingredient-${ingredientName}`],
    },
  });

  let meals = res.data?.meals || [];

  if (meals.length === 0) {
    const variations = buildVariations(ingredientName);

    for (const variation of variations) {
      await delay(100);

      try {
        const varRes = await fetchApi(`http://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(variation)}`, {
          next: {
            revalidate: 600,
            tags: [`meals-ingredient-${variation}`],
          },
        });

        if (varRes.data?.meals?.length > 0) {
          meals = varRes.data.meals;
          break;
        }
      } catch (error: any) {
        if (error?.response?.status === 429) break;
        console.warn("Error trying variation:", variation, error);
      }
    }
  }

  return meals;
}

// ─────────────────────────────────────────────
// Extracted helper — keeps searchMealsByIngredient readable
// ─────────────────────────────────────────────
function buildVariations(ingredientName: string): string[] {
  const commonWords = ["cider", "juice", "oil", "extract", "powder", "paste", "sauce", "syrup", "vinegar"];
  const words = ingredientName.split(" ");
  const filtered = words.filter((w) => !commonWords.includes(w.toLowerCase()));

  const candidates = [ingredientName.trim(), ingredientName.replace(/\s+/g, ""), ingredientName.replace(/\s+/g, "-"), ingredientName.replace(/\s+/g, "_"), ...words, ...(filtered.length < words.length ? [filtered.join(" ")] : [])];

  // Deduplicate and exclude the original (already tried)
  return [...new Set(candidates)].filter((v) => v && v !== ingredientName.trim());
}
