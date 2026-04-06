import React from "react";
import Link from "next/link";
import AppImage from "@/components/atoms/AppImage";

interface IngredientCardWithImageProps {
  ingredient: string;
  imageUrl?: string;
}

const IngredientCardWithImage: React.FC<IngredientCardWithImageProps> = ({ ingredient, imageUrl }) => (
  <Link href={`/ingredients/${encodeURIComponent(ingredient)}`}>
    <div className="relative h-40 rounded-lg overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all">
      {imageUrl ? <AppImage src={imageUrl} alt={ingredient} fill className="group-hover:scale-110 transition-transform duration-300" /> : <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600" />}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
        <h3 className="text-white text-xl font-semibold text-center px-4">{ingredient}</h3>
      </div>
    </div>
  </Link>
);

export default IngredientCardWithImage;
