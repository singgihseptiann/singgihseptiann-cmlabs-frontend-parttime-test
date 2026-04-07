import React from "react";
import { TextProps } from "@/types";


const Text: React.FC<TextProps> = ({ children, className = "", variant = "normal" }) => {
  const variantStyles = {
    normal: "text-zinc-700",
    muted: "text-zinc-600",
    semibold: "font-semibold text-zinc-800",
  };

  return <p className={`${variantStyles[variant]} ${className}`}>{children}</p>;
};

export default Text;
