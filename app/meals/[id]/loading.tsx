import MealDetailSkeleton from "@/components/organisms/MealDetailSkeleton";

export default function Loading() {
  return (
    <main className="bg-white min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Breadcrumb Skeleton */}
        <div className="h-6 bg-zinc-200 rounded animate-pulse w-1/3 mb-8" />

        {/* Meal Detail Skeleton */}
        <MealDetailSkeleton />
      </div>
    </main>
  );
}
