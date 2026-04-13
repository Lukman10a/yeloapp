import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
    formats: ["image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 7,
  },
};

export default nextConfig;
