import React from "react";
import clsx from "clsx";
import { HeadingProps } from "@/types";



// responsive font sizes
const responsiveStyles: Record<number, string> = {
  1: "text-3xl sm:text-4xl md:text-5xl font-bold", // H1
  2: "text-2xl sm:text-3xl md:text-4xl font-bold", // H2
  3: "text-xl sm:text-2xl md:text-3xl font-semibold", // H3
  4: "text-lg sm:text-xl md:text-2xl font-semibold", // H4
  5: "text-base sm:text-lg md:text-xl font-semibold", // H5
  6: "text-sm sm:text-base md:text-lg font-semibold", // H6
};

const Heading: React.FC<HeadingProps> = ({ level, children, className }) => {
  const Tag = `h${level}` as React.ElementType;

  return <Tag className={clsx(responsiveStyles[level], "text-black", className)}>{children}</Tag>;
};

export default Heading;
