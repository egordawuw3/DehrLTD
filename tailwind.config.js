/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: { sans: ['"Plus Jakarta Sans"', "sans-serif"] },
      colors: { brand: "#2563eb", dark: "#050505", surface: "#0f0f10" },
    },
  },
  plugins: [],
}
