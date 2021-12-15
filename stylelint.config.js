/**
 * @type {import("stylelint").Configuration}
 */
module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-sass-guidelines",
    "stylelint-config-prettier",
  ],
  rules: {
    "max-nesting-depth": null,
    "scss/at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["tailwind", "layer", "apply", "variants"],
      },
    ],
  },
};
