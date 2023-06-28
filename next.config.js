/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  // Target must be serverless
  output: "standalone",
};

module.exports = nextConfig;
