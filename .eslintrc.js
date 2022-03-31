const codeStyleRules = {
  // https://eslint.org/docs/rules/curly
  curly: "error",
  // https://eslint.org/docs/rules/eqeqeq
  eqeqeq: "error",
  // https://eslint.org/docs/rules/dot-notation
  "dot-notation": "error",
};

const a11yRules = {
  "jsx-a11y/no-autofocus": "off",
};

const tailwindRules = {
  "tailwindcss/no-custom-classname": "off",
};

const typescriptRules = {
  "@typescript-eslint/naming-convention": [
    "error",
    {
      selector: "interface",
      format: ["PascalCase"],
      custom: {
        regex: "^I[A-Z]",
        match: true,
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
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "next/core-web-vitals",
    "prettier",
    "plugin:cypress/recommended",
    "plugin:jest/recommended",
    "plugin:jest-dom/recommended",
    "plugin:testing-library/react",
    "plugin:jsx-a11y/recommended",
    "plugin:tailwindcss/recommended",
  ],
  rules: {
    ...codeStyleRules,
    ...a11yRules,
    ...tailwindRules,
    ...typescriptRules,
  },
};
