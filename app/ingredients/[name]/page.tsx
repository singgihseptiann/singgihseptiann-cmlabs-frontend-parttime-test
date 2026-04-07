import { Suspense } from "react";
import Breadcrumb from "@/components/molecules/Breadcrumb";
import IngredientDetail from "@/components/organisms/IngredientDetail";
import { searchMealsByIngredient, getAllAvailableIngredients } from "@/utils/searchService";
import { IngredientDetailPageProps } from "@/types";

export default async function IngredientDetailPage({ params, searchParams }: IngredientDetailPageProps) {
  const { name } = await params;
  const { q } = await searchParams;

  const decodedName = decodeURIComponent(name);

  // Cari meals dulu
  let meals = await searchMealsByIngredient(decodedName, q);

  // Kalau meals kosong, fallback: ambil semua ingredient
  let fallbackIngredients = [];
  if (meals.length === 0) {
    fallbackIngredients = await getAllAvailableIngredients();
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
        {meals.length > 0 ? (
          <IngredientDetail ingredient={decodedName} meals={meals} searchQuery={q} />
        ) : (
          <div>
            <h2 className="text-xl font-semibold mb-4">All Available Ingredients</h2>
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {fallbackIngredients.map((ing: any) => (
                <li key={ing.idIngredient} className="border p-2 rounded">
                  {ing.strIngredient}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </main>
  );
}