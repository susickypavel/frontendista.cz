const { fontFamily } = require("tailwindcss/defaultTheme");

/**
 * @type {import("tailwindcss/tailwind-config").TailwindConfig}
 */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["QS", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
