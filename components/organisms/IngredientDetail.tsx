import React, { Suspense } from "react";
import Heading from "../atoms/Heading";
import SearchBar from "../molecules/SearchBar";
import MealList from "../molecules/MealList";

interface IngredientDetailProps {
  ingredient: string;
  meals: any[];
  searchQuery?: string;
}

const IngredientDetail: React.FC<IngredientDetailProps> = ({ ingredient, meals, searchQuery }) => (
  <div className="w-full">
    <Heading level={1} className="mb-8 ">
      {searchQuery ? `Search Results for "${searchQuery}"` : `${ingredient} Meals`}
    </Heading>
    <div className="flex justify-center mb-8">
      <Suspense fallback={<div className="h-10 w-full max-w-md bg-zinc-200 rounded animate-pulse" />}>
        <SearchBar placeholder="Search meals..." />
      </Suspense>
    </div>
    {meals.length === 0 ? (
      <div className="text-center text-zinc-600 py-12">
        <p>No meals found. Try a different search.</p>
      </div>
    ) : (
      <MealList meals={meals} />
    )}
  </div>
);

export default IngredientDetail;
