module.exports = {
  purge: [
    "./pages/**/*.tsx",
    "./pages/**/*.ts",
    "./pages/**/*.js",
    "./src/**/*.tsx",
    "./src/**/*.ts",
    "./src/**/*.js",
  ],
  darkMode: false,
  theme: {
    extend: {
      maxWidth: {
        main: "67.5rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
