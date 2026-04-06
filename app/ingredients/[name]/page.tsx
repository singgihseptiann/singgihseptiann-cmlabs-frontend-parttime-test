import { Suspense } from "react";
import Breadcrumb from "@/components/molecules/Breadcrumb";
import IngredientDetail from "@/components/organisms/IngredientDetail";
import { searchMealsByIngredient } from "@/utils/searchService";
import { notFound } from "next/navigation";

interface IngredientDetailPageProps {
  params: Promise<{ name: string }>;
  searchParams: Promise<{ q?: string }>;
}

export default async function IngredientDetailPage({ params, searchParams }: IngredientDetailPageProps) {
  const { name } = await params;
  const { q } = await searchParams;
  console.log("Ingredient name from URL:", name);
  console.log("Search query:", q);

  // Decode the ingredient name if it comes URL-encoded
  const decodedName = decodeURIComponent(name);
  console.log("Ingredient name from URL:", name);
  console.log("Decoded ingredient name:", decodedName);

  // Try to find meals for the ingredient directly
  const meals = await searchMealsByIngredient(decodedName, q);

  if (!meals.length) {
    console.log("No meals found for ingredient:", decodedName);
    return notFound();
  }

  return (
    <main className="bg-white min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        <Breadcrumb
          items={[
            { id: "back", label: "Back", href: "/" },
            { id: "foods", label: "Foods", href: "/foods" },
            {
              id: "ingredient",
              label: decodedName,
              href: `/ingredients/${encodeURIComponent(decodedName)}`,
            },
          ]}
        />
        <IngredientDetail ingredient={decodedName} meals={meals} searchQuery={q} />
      </div>
    </main>
  );
}
