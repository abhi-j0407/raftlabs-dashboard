/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      lg: { max: "1920px" },
      md: { max: "1023px" },
      sm: { max: "424px" },
    },
    extend: {
      colors: {
        accentPurple: '#6E62E5',
        accentLightPurple: '#D3CFFC',
        accentBlack: '#1E2125',
        accentGray: '#F3F4F8'
      }
     },
  },
  plugins: [],
};
