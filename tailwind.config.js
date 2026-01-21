/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0f172a",
        surface: "#020617",
        accent: "#22d3ee",
      },
    },
  },
  plugins: [],
};
