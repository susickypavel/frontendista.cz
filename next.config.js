const { default: chalk } = require("chalk");

(() => {
  function checkEnvironmentVariables() {
    const requiredVariables = [
      "NEXT_PUBLIC_DOMAIN",
      "SANITY_PROJECT_ID",
      "SANITY_DATASET_ID",
      "SANITY_CLIENT_TOKEN",
      "SANITY_GRAPHQL_ENDPOINT",
    ];

    let isOkFlag = true;

    requiredVariables.forEach((variable) => {
      if (!process.env[variable]) {
        console.log(
          chalk.red(
            `'${variable}' is a required environment variable and it's not set.`
          )
        );
        isOkFlag = false;
      }
    });

    if (!isOkFlag && process.env.NODE_ENV === "production") {
      process.exit(1);
    }
  }

  checkEnvironmentVariables();
})();

/**
 * @type {import("next").NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"],
    deviceSizes: [640, 768, 1080, 1440, 1920, 3840],
  },
};

module.exports = nextConfig;
