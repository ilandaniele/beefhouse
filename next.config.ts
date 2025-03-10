import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true, // Desactiva la optimización para Netlify
  },
};

export default nextConfig;
