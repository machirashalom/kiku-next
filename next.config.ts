import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/kiku",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
