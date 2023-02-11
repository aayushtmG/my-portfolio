/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textColor: "#757575",
        titleColor: "#333333",
        titleDark: "#00000",
      },
      fontFamily: {
        pop: ["Poppins", "sans-serif"],
        lob: ["Lobster", "cursive"],
      },
      container: {
        center: true,
        padding: {
          xl: "4rem",
        },
      },
    },
    plugins: [],
  },
};
