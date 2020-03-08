const path = require("path");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  webpack: config => {
    config.resolve.alias["~"] = path.resolve(__dirname, "src");
    return config;
  },
});
