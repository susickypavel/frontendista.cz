module.exports = {
  purge: ["./pages/**/*.tsx", "./pages/**/*.ts", "./pages/**/*.js", "./src/**/*.tsx", "./src/**/*.ts", "./src/**/*.js"],
  darkMode: false,
  theme: {
    extend: {
      maxWidth: {
        main: "67.5rem",
      },
      screens: {
        "2xl": { max: "1535px" },
        xl: { max: "1279px" },
        lg: { max: "1023px" },
        md: { max: "767px" },
        sm: { max: "639px" },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
