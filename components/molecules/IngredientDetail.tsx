import React from "react";
import MealList from "./MealList";
import { IngredientDetailProps } from "@/types";


const IngredientDetail: React.FC<IngredientDetailProps> = ({ ingredient, meals }) => (
  <div className="max-w-6xl mx-auto p-6">
    <h2 className="text-2xl font-bold mb-6">Meals with {ingredient}</h2>
    <MealList meals={meals} />
  </div>
);

export default IngredientDetail;
