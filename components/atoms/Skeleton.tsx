import React from "react";
import { SkeletonProps } from "@/types";

const Skeleton: React.FC<SkeletonProps> = ({ className = "" }) => <div className={`bg-zinc-200 animate-pulse rounded ${className}`} />;

export default Skeleton;
