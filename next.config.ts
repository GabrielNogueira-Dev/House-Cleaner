import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.cosmicjs.com',
        pathname: '/**', // permite todas as imagens do CosmicJS
      },
    ],
    qualities: [100], // permite usar quality={100} nas imagens
  },
};

export default nextConfig;
