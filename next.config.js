const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([], {
  env: {
    VERCEL_URL: process.env.VERCEL_URL,
  },
  webpack: config => {
    return config;
  },
});
