import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize images for best performance
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    qualities: [75, 95], // Support both default and high quality
  },
  
  // Enable strict mode for better development experience
  reactStrictMode: true,
  
  // Optimize production builds
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
