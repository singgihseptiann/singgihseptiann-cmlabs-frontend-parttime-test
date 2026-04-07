import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  images: {
    domains: ["www.themealdb.com"],
  },
};

export default nextConfig;
