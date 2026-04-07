import React from "react";
import Text from "../atoms/Text";
import { MealMetaProps } from "@/types";


const MealMeta: React.FC<MealMetaProps> = ({ category, area, tags }) => {
  const parsedTags = tags ? tags.split(',').map(t => t.trim()).filter(Boolean) : [];

  return (
    <div className="flex flex-wrap gap-3">
      {category && (
        <div className="px-4 py-2 rounded-full bg-orange-100/80 text-orange-700 text-sm font-semibold tracking-wide border border-orange-200 flex items-center">
          🍽️ <span className="ml-2">{category}</span>
        </div>
      )}
      {area && (
        <div className="px-4 py-2 rounded-full bg-amber-100/80 text-amber-700 text-sm font-semibold tracking-wide border border-amber-200 flex items-center">
          🌍 <span className="ml-2">{area}</span>
        </div>
      )}
      {parsedTags.map((tag, idx) => (
        <div key={idx} className="px-3 py-1.5 rounded-full bg-zinc-100/80 text-zinc-600 text-xs font-semibold tracking-wide border border-zinc-200 flex items-center">
          # {tag}
        </div>
      ))}
    </div>
  );
};

export default MealMeta;
