/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          maroon: {
            DEFAULT: "#6B1C23",
            dark: "#4A1219",
            light: "#8B2E37",
            50: "#FDF5F5",
            100: "#F5E0E1",
          },
          gold: {
            DEFAULT: "#C9A961",
            light: "#FFF9ED",
            dark: "#A8883A",
          },
        },
        fontFamily: {
          serif: ["Merriweather", "Georgia", "serif"],
          sans: ["Inter", "system-ui", "sans-serif"],
        },
      },
    },
    plugins: [],
  }