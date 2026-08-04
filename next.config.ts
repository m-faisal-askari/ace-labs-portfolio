import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Serve modern formats (smaller than JPEG/PNG) when supported.
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    // Transform barrel imports into direct ones to trim client JS.
    // (lucide-react is optimized by default; framer-motion added here.)
    optimizePackageImports: ["framer-motion"],
  },
};

export default nextConfig;
