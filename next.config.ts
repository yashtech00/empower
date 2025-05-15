import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.vecteezy.com',
      },
      {
         protocol: 'https',
        hostname: 'img.freepik.com',
      }
    ]
  }
};

export default nextConfig;
