const { fontFamily } = require("tailwindcss/defaultTheme");

/**
 * @type {import("tailwindcss/tailwind-config").TailwindConfig}
 */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
    extend: {
      fontFamily: {
        sans: ["PP", ...fontFamily.sans],
      },
      height: {
        navigationHeight: "5rem",
      },
    },
  },
  plugins: [],
};
