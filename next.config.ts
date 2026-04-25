import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/heyron-docs',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
