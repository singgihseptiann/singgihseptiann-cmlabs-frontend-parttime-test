import React, { Suspense } from "react";
import Heading from "../atoms/Heading";
import SearchBar from "../molecules/SearchBar";
import MealList from "../molecules/MealList";
import { IngredientDetailProps } from "@/types";



const IngredientDetail: React.FC<IngredientDetailProps> = ({ ingredient, meals, searchQuery }) => (
  <div className="w-full max-w-7xl mx-auto px-4">
    <div className="bg-zinc-50 border border-zinc-100 rounded-3xl p-8 md:p-12 mb-10 text-center">
      <Heading level={1} className="text-4xl md:text-5xl font-extrabold text-zinc-900 mb-6">
        {searchQuery ? (
          <>
            Results for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">"{searchQuery}"</span>
          </>
        ) : (
          <>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">{ingredient}</span> Meals
          </>
        )}
      </Heading>
      <div className="flex justify-center max-w-2xl mx-auto">
        <Suspense fallback={<div className="h-14 w-full bg-zinc-200 rounded-full animate-pulse" />}>
          <SearchBar placeholder="Search meals..." />
        </Suspense>
      </div>
    </div>
    
    <div className="bg-white/80 rounded-3xl p-4 md:p-8 min-h-[50vh]">
      {meals.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-zinc-500 py-20 bg-zinc-50 rounded-2xl border border-dashed border-zinc-200">
          <svg className="w-16 h-16 mb-4 text-zinc-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-xl font-medium text-zinc-700">No meals found.</p>
          <p className="mt-2">Try a different search term.</p>
        </div>
      ) : (
        <MealList meals={meals} />
      )}
    </div>
  </div>
);

export default IngredientDetail;
