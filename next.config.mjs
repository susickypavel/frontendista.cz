/**
 * @type {import("next").NextConfig}
 */
const config = {
  reactStrictMode: true,
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.resolve.alias["react-dom"] = "preact/compat";
      config.resolve.alias["react"] = "preact/compat";
    }

    return config;
  },
};

export default config;
