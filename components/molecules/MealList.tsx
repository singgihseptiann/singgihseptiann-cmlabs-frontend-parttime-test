import React from "react";
import MealCard from "../atoms/MealCard";
import { MealListProps } from "@/types";

const MealList: React.FC<MealListProps> = ({ meals }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
    {meals.map((meal) => (
      <MealCard key={meal.idMeal} mealName={meal.strMeal} mealId={meal.idMeal} mealImage={meal.strMealThumb} />
    ))}
  </div>
);

export default MealList;
