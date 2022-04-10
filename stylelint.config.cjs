const recessConfig = require("stylelint-config-recess-order");

const recessConfigWithEmptyLine = recessConfig.rules["order/properties-order"].map(
  group => {
    return {
      ...group,
      emptyLineBefore: "always",
    };
  },
);

const scssRules = {
  "scss/at-rule-no-unknown": [
    null,
    {
      ignoreAtRules: ["tailwind"],
    },
  ],
};

const orderRules = {
  "order/properties-order": recessConfigWithEmptyLine,
};

/**
 * @type {import("stylelint").Config}
 */
const config = {
  extends: [
    "stylelint-config-prettier-scss",
    "stylelint-config-recommended-scss",
    "stylelint-config-recess-order",
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
    ...scssRules,
    ...orderRules,
  },
};

module.exports = config;
