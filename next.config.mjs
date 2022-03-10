import chalk from "chalk";
import analyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = analyzer({
  enabled: process.env.ANALYZE === "true",
});

function validateEnvVars() {
  const requiredVars = [
    "SANITY_GRAPHQL_ENDPOINT",
    "SANITY_CLIENT_TOKEN",
    "SANITY_PROJECT_ID",
    "SANITY_DATASET_ID",
  ];

  requiredVars.reduce((hasFailed, variable) => {
    const isMissing = !process.env[variable];

    if (isMissing) {
      console.error(
        `${chalk.red`env  `} - ${chalk.bold.redBright`${variable}`} is required`,
      );
    }

    return hasFailed || isMissing;
  }, false) && process.exit(1);
}

/**
 * @type {import("next").NextConfig}
 */
const config = {
  reactStrictMode: true,
  images: {
    deviceSizes: [360, 480, 720, 1280, 1440],
    imageSizes: [16, 32, 64, 128, 256],
    domains: ["cdn.sanity.io"],
    formats: ["image/avif", "image/webp"],
  },
  webpack: (config, { dev, isServer }) => {
    validateEnvVars();

    if (!dev && !isServer) {
      config.resolve.alias["react-dom"] = "preact/compat";
      config.resolve.alias["react"] = "preact/compat";
    }

    return config;
  },
};

export default withBundleAnalyzer(config);
