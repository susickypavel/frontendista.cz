/**
 * @type {import("stylelint").Config}
 */
const config = {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-prettier-scss",
    "stylelint-config-recommended-scss",
    "stylelint-config-idiomatic-order",
  ],
  plugins: ["stylelint-order"],
  rules: {
    // CamelCase pattern
    "selector-class-pattern": "^[a-z][a-zA-Z0-9]+$",
  },
};

module.exports = config;
