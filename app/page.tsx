import { Suspense } from "react";
import HeroSection from "../components/organisms/HeroSection";
import InfiniteIngredientScroll from "../components/organisms/InfiniteIngredientScroll";
import SearchBar from "../components/molecules/SearchBar";
import { searchIngredients } from "../utils/searchService";

interface HomeProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const { q } = await searchParams;
  const result = await searchIngredients(q, 0);

  // Ensure result.ingredients is always an array
  const initialIngredients = Array.isArray(result.ingredients) ? result.ingredients : [];
  const hasMore = result.hasMore ?? false;

  return (
    <>
      <HeroSection />
      <main className="bg-white py-12 min-h-screen">
        <div className="flex justify-center mb-8 max-w-7xl mx-auto px-4">
          <Suspense fallback={<div className="h-10 w-full max-w-md bg-zinc-200 rounded animate-pulse" />}>
            <SearchBar placeholder="Search ingredients..." />
          </Suspense>
        </div>

        {initialIngredients.length === 0 ? (
          <div className="text-center text-zinc-600 py-12">
            <p className="text-lg">No ingredients found. Try a different search.</p>
          </div>
        ) : (
          <div className="max-w-7xl mx-auto px-4">
            <InfiniteIngredientScroll initialIngredients={initialIngredients} initialHasMore={hasMore} query={q} />
          </div>
        )}
      </main>
    </>
  );
}
