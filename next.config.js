/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[]",
  },

  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    return config;
  },

  test: /\.s?[ac]ss$/,
  use: ["style-loader", "css-loader", "sass-loader"],
  exclude: [/node_modules/],
};
