const path = require("path");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const Dotenv = require("dotenv-webpack");

module.exports = withBundleAnalyzer({
  webpack: config => {
    config.resolve.alias["~"] = path.resolve(__dirname, "src");

    config.plugins.push(new Dotenv());

    return config;
  },
  env: {
    ROOT: process.env.ROOT,
  },
});
