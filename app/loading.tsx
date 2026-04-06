import CardGridSkeleton from "@/components/organisms/CardGridSkeleton";

export default function Loading() {
  return (
    <>
      {/* Hero Section Skeleton */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="h-12 bg-zinc-200 rounded animate-pulse mb-4 w-3/4 mx-auto" />
          <div className="h-6 bg-zinc-200 rounded animate-pulse w-2/3 mx-auto" />
        </div>
      </div>

      {/* Main Content */}
      <main className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Search Bar Skeleton */}
          <div className="flex justify-center mb-8">
            <div className="h-10 w-full max-w-md bg-zinc-200 rounded animate-pulse" />
          </div>

          {/* Grid Skeleton */}
          <CardGridSkeleton />
        </div>
      </main>
    </>
  );
}
