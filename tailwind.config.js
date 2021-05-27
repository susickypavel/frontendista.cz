module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{ts,tsx}", "./pages/**/*.{ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      fontSize: {
        "6.5xl": "4rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
