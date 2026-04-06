import React from "react";
import Link from "next/link";
import AppImage from "@/components/atoms/AppImage";

interface MealCardProps {
  mealName: string;
  mealId: string;
  mealImage?: string;
}

const MealCard: React.FC<MealCardProps> = ({ mealName, mealId, mealImage }) => (
  <Link href={`/meals/${mealId}`}>
    <div className="group block h-40 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
      <div className="relative w-full h-full">
        <AppImage src={mealImage || "/images/fallback.png"} alt={mealName} fill className="group-hover:scale-110 transition-transform duration-300" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
          <h3 className="text-white text-lg font-semibold text-center px-4">{mealName}</h3>
        </div>
      </div>
    </div>
  </Link>
);

export default MealCard;
