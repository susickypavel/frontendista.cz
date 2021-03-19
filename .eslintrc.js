module.exports = {
  env: {
    browser: true,
    es2021: true,
    commonjs: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/typescript"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: [
    "react",
    "@typescript-eslint"
  ],
  rules: {
    indent: ["error", 2],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "linebreak-style": ["error", "unix"],
    "array-bracket-newline": ["error", { "multiline": true }],
    "import/newline-after-import": ["error", { count: 2 }]
  },
  settings: {
    react: {
      version: "detect"
    }
  },
};
