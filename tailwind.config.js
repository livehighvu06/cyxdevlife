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
        dark: "#202023",
        secondary: "#F5F0E8",
      },
      borderColor: {
        title: "#B5495B",
      },
    },
  },
  plugins: [],
};
