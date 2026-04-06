import React from "react";
import Skeleton from "../atoms/Skeleton";

const CardSkeleton: React.FC = () => (
  <div className="rounded-lg overflow-hidden h-40">
    <Skeleton className="h-full w-full" />
  </div>
);

export default CardSkeleton;
