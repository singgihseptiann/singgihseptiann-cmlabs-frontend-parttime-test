import CardGridSkeleton from "@/components/organisms/CardGridSkeleton";

export default function Loading() {
  return (
    <main className="bg-white min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Breadcrumb Skeleton */}
        <div className="h-6 bg-zinc-200 rounded animate-pulse w-1/3 mb-8" />

        {/* Ingredient Title Skeleton */}
        <div className="mb-8">
          <div className="h-10 bg-zinc-200 rounded animate-pulse w-1/2 mb-4" />
        </div>

        {/* Search Bar Skeleton */}
        <div className="flex justify-center mb-8">
          <div className="h-10 w-full max-w-md bg-zinc-200 rounded animate-pulse" />
        </div>

        {/* Grid Skeleton */}
        <CardGridSkeleton />
      </div>
    </main>
  );
}
