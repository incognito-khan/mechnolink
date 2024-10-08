/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    reactStrictMode: true,
    optimizeFonts: true,
    trailingSlash: true
};

const webpacks = {
    webpack: (config) => {
      config.resolve.fallback = { fs: false, path: false};
  
      return config;
    },
  };
  const config = {
    ...webpacks,
    ...nextConfig,
  };
  module.exports = config;
