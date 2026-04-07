import React from "react";
import Link from "next/link";
import AppImage from "@/components/atoms/AppImage";
import { MealCardProps } from "@/types";



const MealCard: React.FC<MealCardProps> = ({ mealName, mealId, mealImage }) => (
  <Link href={`/meals/${mealId}`}>
    <div className="group block h-48 md:h-56 rounded-2xl overflow-hidden border border-zinc-100 hover:-translate-y-1 transition-all duration-300 bg-white">
      <div className="relative w-full h-full">
        {mealImage ? (
          <AppImage 
            src={mealImage} 
            alt={mealName} 
            fill 
            className="group-hover:scale-110 transition-transform duration-700 ease-in-out object-cover" 
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-amber-600" />
        )}

        {/* Modern Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Content wrapper */}
        <div className="absolute inset-0 p-4 flex items-end justify-center">
          <h3 className="text-white text-lg md:text-xl font-bold tracking-wide text-center transform group-hover:-translate-y-2 transition-transform duration-300">
            {mealName}
          </h3>
        </div>
      </div>
    </div>
  </Link>
);

export default MealCard;
