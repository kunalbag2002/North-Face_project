/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ✅ This tells Next.js to ignore ESLint errors during `next build`
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
