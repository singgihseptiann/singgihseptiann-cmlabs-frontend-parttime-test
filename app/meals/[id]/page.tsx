import Breadcrumb from "@/components/molecules/Breadcrumb";
import MealDetail from "@/components/organisms/MealDetail";
import { fetchApi } from "@/utils/fetchApi";
import { notFound } from "next/navigation";
import { MealDetailPageProps } from "@/types";



export default async function MealDetailPage({ params }: MealDetailPageProps) {
  const { id } = await params;
  const res = await fetchApi(`http://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`, {
    cache: "force-cache",
    next: {
      revalidate: 86400,
    },
  });
  const meal = res.data?.meals?.[0];

  if (!meal) return notFound();

  return (
    <main className="bg-white min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        <Breadcrumb
          items={[
            { id: "back", label: "Back", href: "/" },
            { id: "foods", label: "Foods", href: "/foods" },
            { id: "category", label: meal.strCategory || "Meal", href: "#" },
            { id: "detail", label: meal.strMeal, href: `/meals/${id}` },
          ]}
        />
        <MealDetail meal={meal} />
      </div>
    </main>
  );
}
