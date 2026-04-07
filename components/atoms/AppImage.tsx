"use client";

import Image, { ImageProps } from "next/image";
import clsx from "clsx";
import { useState } from "react";
import { AppImageProps } from "@/types";



const AppImage: React.FC<AppImageProps> = ({ src, alt, className, fallbackSrc = "/images/fallback.png", ...props }) => {
  const [imgSrc, setImgSrc] = useState<ImageProps["src"]>(src || fallbackSrc);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-full overflow-hidden" suppressHydrationWarning>
      {/* Blur placeholder shown while loading */}
      <div
        aria-hidden="true"
        className={clsx("absolute inset-0 scale-110 blur-2xl transition-opacity duration-500", isLoading ? "opacity-100" : "opacity-0")}
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Main Image */}
      <Image
        {...props}
        src={imgSrc}
        alt={alt}
        fill
        sizes={props.sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
        className={clsx("object-cover transition-opacity duration-500", isLoading ? "opacity-0" : "opacity-100", className)}
        onLoad={() => setIsLoading(false)} // replaces deprecated onLoadingComplete
        onError={() => {
          setImgSrc(fallbackSrc);
          setIsLoading(false); // stop blur if image fails
        }}
      />
    </div>
  );
};

export default AppImage;
