module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-sass-guidelines"],
  rules: {
    "font-family-no-missing-generic-family-keyword": null,
    "string-quotes": "double",
    "scss/at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [/^tailwind$/, /^apply$/],
      },
    ],
  },
};
