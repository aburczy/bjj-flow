/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E293B",
        secondary: "#3B82F6",
        accent: "#22C55E",
        dark: "#0F172A",
        light: "#FFFFFF",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Définir Poppins comme police principale
      },
    },
  },
  plugins: [],
};
