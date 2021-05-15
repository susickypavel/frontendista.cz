const withPlugins = require("next-compose-plugins");

const nextConfiguration = (phase, { defaultConfig }) => {
  checkVariables();

  return {
    pageExtensions: ["tsx", "mdx"],
    webpack: (config) => {
      return config;
    },
  };
};

function checkVariables() {
  if (!process.env.NEXT_PUBLIC_DOMAIN || !process.env.NEXT_PUBLIC_PROTOCOL) {
    console.error("Couldn't find DOMAIN & PROTOCOL variables");
    process.exit(1);
  }
}

module.exports = withPlugins([], nextConfiguration);
