import React from "react";
import Link from "next/link";
import AppImage from "@/components/atoms/AppImage";
import { IngredientCardWithImageProps } from "@/types";



const IngredientCardWithImage: React.FC<IngredientCardWithImageProps> = ({ ingredient, imageUrl }) => (
  <Link href={`/ingredients/${encodeURIComponent(ingredient)}`}>
    <div className="relative h-48 md:h-56 rounded-2xl overflow-hidden group cursor-pointer border border-zinc-100 hover:-translate-y-1 transition-all duration-300 bg-white">
      {imageUrl ? (
        <AppImage 
          src={imageUrl} 
          alt={ingredient} 
          fill 
          className="group-hover:scale-110 transition-transform duration-700 ease-in-out object-contain p-4" 
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-amber-600" />
      )}

      {/* Modern Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
      
      {/* Content wrapper */}
      <div className="absolute inset-0 p-4 flex items-end justify-center">
        <h3 className="text-white text-lg md:text-xl font-bold tracking-wide text-center transform group-hover:-translate-y-2 transition-transform duration-300">
          {ingredient}
        </h3>
      </div>
    </div>
  </Link>
);

export default IngredientCardWithImage;
