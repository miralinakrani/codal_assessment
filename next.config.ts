import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    minimumCacheTTL: 60,
    domains: ['via.placeholder.com'],
  },
};

export default nextConfig;
