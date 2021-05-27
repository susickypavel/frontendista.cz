module.exports = (phase, { defaultConfig }) => {
  checkVariables();

  return {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });

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
