/** @type {import('tailwindcss').Config} */
<<<<<<< HEAD
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    screens: { // => @media (min-width: ___px) { ... }
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      ipad: { 'raw': '(min-device-width: 768px) and (max-device-width: 1024px)' },
    },
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
=======
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

>>>>>>> 79589a5fef73cd4a3e558dc47e745275e2da38e5
