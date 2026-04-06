import React from "react";

interface MealDetailInfoProps {
  meal: any;
}

const MealDetailInfo: React.FC<MealDetailInfoProps> = ({ meal }) => (
  <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
    <h1 className="text-3xl font-bold mb-4">{meal.strMeal}</h1>
    <div className="mb-4">
      <p className="text-zinc-600 mb-2">
        <span className="font-semibold">Category:</span> {meal.strCategory}
      </p>
      <p className="text-zinc-600 mb-2">
        <span className="font-semibold">Area:</span> {meal.strArea}
      </p>
      {meal.strTags && (
        <p className="text-zinc-600 mb-2">
          <span className="font-semibold">Tags:</span> {meal.strTags}
        </p>
      )}
    </div>
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Instructions</h2>
      <p className="text-zinc-700 leading-relaxed">{meal.strInstructions}</p>
    </div>
    {meal.strYoutube && (
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Video Recipe</h2>
        <div className="aspect-video">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${meal.strYoutube.split("v=")[1]}`}
            title="Meal Recipe"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    )}
  </div>
);

export default MealDetailInfo;
