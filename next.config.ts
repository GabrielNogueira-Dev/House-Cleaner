import type { NextConfig } from "next";
import { hostname } from "os";


const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.cosmicjs.com',
        pathname: '/**', // allows all paths
      },
    ],
  },
};

export default nextConfig;
