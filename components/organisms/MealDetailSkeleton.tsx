import React from "react";
import Skeleton from "../atoms/Skeleton";

const MealDetailSkeleton: React.FC = () => (
  <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg ">
    <Skeleton className="h-10 w-3/4 mb-4" />
    <div className="mb-4 space-y-2">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
    </div>
    <div className="mb-6">
      <Skeleton className="h-6 w-1/3 mb-2" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-full" />
    </div>
    <Skeleton className="h-64 w-full rounded" />
  </div>
);

export default MealDetailSkeleton;
