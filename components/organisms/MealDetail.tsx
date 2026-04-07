import React from "react";
import Heading from "../atoms/Heading";
import MealMeta from "../molecules/MealMeta";
import Instructions from "../molecules/Instructions";
import VideoRecipe from "../molecules/VideoRecipe";
import AppImage from "../atoms/AppImage";
import { MealDetailProps } from "@/types";


const MealDetail: React.FC<MealDetailProps> = ({ meal }) => (
  <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-xl    overflow-hidden">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 space-y-8">

      {/* Left side - Image */}
      <div className="h-[400px] lg:h-[600px] relative w-full rounded-2xl overflow-hidden bg-zinc-50">
        {meal.strMealThumb ? (
          <AppImage
            src={meal.strMealThumb}
            alt={meal.strMeal}
            fill
            className="object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-amber-600 flex items-center justify-center text-white text-2xl font-bold opacity-80" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
        <div className="absolute bottom-6 left-6 right-6">
          <Heading level={1} className="text-4xl md:text-5xl font-extrabold text-white mb-2">
            {meal.strMeal}
          </Heading>
        </div>
      </div>

      {/* Right side - Content */}
      <div className=" flex flex-col space-y-8 bg-zinc-50/50">
        <MealMeta category={meal.strCategory} area={meal.strArea} tags={meal.strTags} />
        <div className="h-px bg-zinc-200/60 w-full" />
        <Instructions instructions={meal.strInstructions} />
      </div>
    </div>

    {/* Video section */}
    {meal.strYoutube && (
      <div className="p-8 md:p-12 border-t border-zinc-100 bg-white"> {/* ✅ added padding */}
        <Heading level={2} className="text-2xl font-bold text-zinc-800 flex items-center mb-6">
          <span className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mr-3">
            <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
          </span>
          Video Tutorial
        </Heading>
        <div className="rounded-2xl overflow-hidden ring-1 ring-zinc-200">
          <VideoRecipe youtubeUrl={meal.strYoutube} />
        </div>
      </div>
    )}
  </div>
);

export default MealDetail;
