/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons", // Keep existing custom font
        sans: ["Inter", "sans-serif"], // Modern sans-serif default
      },
      colors: {
        // Refined Palette
        primary: {
          light: "#FDFBF7", // Softer white/cream
          DEFAULT: "#F1E7DC", // Existing primary
          dark: "#E5D4C0", // Darker shade of primary
        },
        dark: {
          light: "#2D2D35",
          DEFAULT: "#202023", // Existing dark bg
          dark: "#161618",
        },
        teal: {
          lighter: "#99F6E4", // Tailwind teal-200
          light: "#5EEAD4", // Tailwind teal-300
          DEFAULT: "#0D9488", // Tailwind teal-600 (adjusted for better contrast)
          dark: "#115E59", // Tailwind teal-800
        },
        amber: {
          light: "#FDE68A", // Tailwind amber-200
          DEFAULT: "#F59E0B", // Tailwind amber-500
          dark: "#B45309", // Tailwind amber-700
        },
        accent: {
          rose: "#B5495B", // Existing border color
          gold: "#D4AF37",
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center'
          }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      },
    },
  },
  plugins: [],
};
