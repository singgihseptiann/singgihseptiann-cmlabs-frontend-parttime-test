import React from "react";

interface SkeletonProps {
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ className = "" }) => <div className={`bg-zinc-200 animate-pulse rounded ${className}`} />;

export default Skeleton;
