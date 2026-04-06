"use client";

import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import IngredientCardWithImage from "@/components/molecules/IngredientCardWithImage";
import CardSkeleton from "@/components/molecules/CardSkeleton";

interface Ingredient {
  idIngredient: string;
  strIngredient: string;
  strThumb: string;
}

interface InfiniteIngredientScrollProps {
  initialIngredients: Ingredient[];
  initialHasMore: boolean;
  query?: string;
}

export default function InfiniteIngredientScroll({ initialIngredients, initialHasMore, query }: InfiniteIngredientScrollProps) {
  const [ingredients, setIngredients] = useState<Ingredient[]>(initialIngredients);
  const [hasMore, setHasMore] = useState(initialHasMore);
  const [offset, setOffset] = useState(10);

  useEffect(() => {
    // Reset when search query changes
    setIngredients(initialIngredients);
    setHasMore(initialHasMore);
    setOffset(10);
  }, [query, initialIngredients, initialHasMore]);

  const loadMore = async () => {
    try {
      const params = new URLSearchParams();
      params.append("offset", offset.toString());
      if (query) {
        params.append("q", query);
      }

      const response = await fetch(`/api/ingredients?${params.toString()}`);
      const data = await response.json();

      console.log("Loaded data:", data);

      if (!response.ok) {
        console.error("API error:", data.error);
        setHasMore(false);
        return;
      }

      if (Array.isArray(data.ingredients) && data.ingredients.length > 0) {
        setIngredients((prev) => [...prev, ...data.ingredients]);
        setHasMore(data.hasMore);
        setOffset((prev) => prev + 10);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Failed to load more ingredients:", error);
      setHasMore(false);
    }
  };

  return (
    <InfiniteScroll
      dataLength={ingredients.length}
      next={loadMore}
      hasMore={hasMore}
      loader={
        <div key="loader" className="col-span-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
          <CardSkeleton key="skeleton-0" />
          <CardSkeleton key="skeleton-1" />
          <CardSkeleton key="skeleton-2" />
          <CardSkeleton key="skeleton-3" />
          <CardSkeleton key="skeleton-4" />
          <CardSkeleton key="skeleton-5" />
          <CardSkeleton key="skeleton-6" />
          <CardSkeleton key="skeleton-7" />
          <CardSkeleton key="skeleton-8" />
          <CardSkeleton key="skeleton-9" />
        </div>
      }
      endMessage={
        <div key="endmessage" className="col-span-full text-center text-zinc-500 py-12">
          <p className="text-lg">No more ingredients to load</p>
        </div>
      }
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
      scrollableTarget="window"
      scrollThreshold={0.8}
    >
      {ingredients.map((ingredient, index) => (
        <IngredientCardWithImage key={`${ingredient.idIngredient}-${index}`} ingredient={ingredient.strIngredient} imageUrl={ingredient.strThumb} />
      ))}
    </InfiniteScroll>
  );
}
