import analyzer from "@next/bundle-analyzer";

import { validateEnvVars } from "./scripts/validate-env-vars.mjs";
import { mangleClassName } from "./scripts/mangle-class-name.mjs";

const getLocalIdent = mangleClassName();

const withBundleAnalyzer = analyzer({
  enabled: process.env.ANALYZE === "true",
});

/**
 * @type {import("next").NextConfig}
 */
const config = {
  productionBrowserSourceMaps: process.env.PRODUCTION_SOURCE_MAPS === "true",
  reactStrictMode: true,
  images: {
    deviceSizes: [360, 480, 720, 1280, 1440],
    imageSizes: [16, 32, 64, 128, 256],
    domains: ["cdn.sanity.io"],
    formats: ["image/avif", "image/webp"],
  },
  webpack: (config, { dev, isServer }) => {
    validateEnvVars(process.env);

    if (!dev && !isServer) {
      config.resolve.alias["react-dom"] = "preact/compat";
      config.resolve.alias["react"] = "preact/compat";
    }

    const rules = config.module.rules
      .find(rule => typeof rule.oneOf === "object")
      .oneOf.filter(rule => Array.isArray(rule.use));

    if (!dev)
      rules.forEach(rule => {
        rule.use.forEach(moduleLoader => {
          if (
            moduleLoader.loader?.includes("css-loader") &&
            !moduleLoader.loader?.includes("postcss-loader")
          ) {
            moduleLoader.options.modules = {
              ...moduleLoader.options.modules,
              getLocalIdent,
            };
          }
        });
      });

    return config;
  },
};

export default withBundleAnalyzer(config);
