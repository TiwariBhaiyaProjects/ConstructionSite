/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // For exporting statically if needed, or if no image server is configured
  },
};

export default nextConfig;
