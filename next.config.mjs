import chalk from "chalk";

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
  webpack: (config, { dev, isServer }) => {
    validateEnvVars();

    if (!dev && !isServer) {
      config.resolve.alias["react-dom"] = "preact/compat";
      config.resolve.alias["react"] = "preact/compat";
    }

    return config;
  },
};

export default config;
