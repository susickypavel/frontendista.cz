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
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    ...codeStyleRules,
  },
};
