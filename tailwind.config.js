/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
      },
      backgroundColor: {
        primary: "#F1E7DC",
        secondary: "#F5F0E8",
      },
      borderColor: {
        title: "#535353",
      },
    },
  },
  plugins: [],
};
