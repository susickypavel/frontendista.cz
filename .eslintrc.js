const codeStyleRules = {
  // https://eslint.org/docs/rules/curly
  curly: "error",
  // https://eslint.org/docs/rules/eqeqeq
  eqeqeq: "error",
  // https://eslint.org/docs/rules/dot-notation
  "dot-notation": "error",
  "capitalized-comments": [
    "error",
    "always",
    {
      line: {},
      block: {
        ignoreInlineComments: true,
        ignoreConsecutiveComments: true,
      },
    },
  ],
};

/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
    jest: true,
    // NOTE: Might be useful in future.
    worker: false,
    serviceworker: false,
  },
  extends: [
    "eslint:recommended",
    "next/core-web-vitals",
    "prettier",
    "plugin:cypress/recommended",
  ],
  rules: {
    ...codeStyleRules,
  },
};
