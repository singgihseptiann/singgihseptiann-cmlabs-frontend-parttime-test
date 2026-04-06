import React from "react";
import CardSkeleton from "../molecules/CardSkeleton";

const CardGridSkeleton: React.FC = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {Array.from({ length: 10 }).map((_, i) => (
      <CardSkeleton key={i} />
    ))}
  </div>
);

export default CardGridSkeleton;
