/**
 * @type {import("stylelint").Config}
 */
const config = {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-prettier-scss",
    "stylelint-config-recommended-scss",
  ],
  plugins: ["stylelint-order", "stylelint-no-unsupported-browser-features"],
  rules: {
    // CamelCase pattern
    "selector-class-pattern": "^[a-z][a-zA-Z0-9]+$",
    "plugin/no-unsupported-browser-features": [
      true,
      {
        severity: "warning",
      },
    ],
  },
};

module.exports = config;
