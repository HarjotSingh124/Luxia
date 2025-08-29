/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false, // 🔴 force disable Turbopack
  },
  webpack: (config) => {
    return config; // ensure webpack is used
  },
};

module.exports = nextConfig;