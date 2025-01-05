import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['gsap'],
  images: {
    remotePatterns: [
      {
        hostname: 'images.unsplash.com',
      },
      {
        hostname: 'plus.unsplash.com',
      },
      {
        hostname: 'picsum.photos',
      }
    ],
  },
};

export default nextConfig;
