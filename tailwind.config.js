/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      lg: { max: "1920px" },
      md: { max: "1023px" },
      sm: { max: "424px" },
    },
    extend: {},
  },
  plugins: [],
};
