import React from "react";
import Heading from "../atoms/Heading";
import MealMeta from "../molecules/MealMeta";
import Instructions from "../molecules/Instructions";
import VideoRecipe from "../molecules/VideoRecipe";
import AppImage from "../atoms/AppImage";

interface MealDetailProps {
  meal: any;
}

const MealDetail: React.FC<MealDetailProps> = ({ meal }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-lg">
    {/* Left side - Image and meta */}
    <div>
      {meal.strMealThumb && (
        <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-md mb-6">
          <AppImage src={meal.strMealThumb} alt={meal.strMeal} fill />
        </div>
      )}

      <MealMeta category={meal.strCategory} area={meal.strArea} tags={meal.strTags} />
    </div>

    {/* Right side - Content */}
    <div>
      <Heading level={1} className="mb-6">
        {meal.strMeal}
      </Heading>
      <Instructions instructions={meal.strInstructions} />
    </div>

    {/* Video section */}
    {meal.strYoutube && (
      <div className="md:col-span-2">
        <Heading level={2} className="mb-4">
          Tutorials
        </Heading>
        <VideoRecipe youtubeUrl={meal.strYoutube} />
      </div>
    )}
  </div>
);

export default MealDetail;
