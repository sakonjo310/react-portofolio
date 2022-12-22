/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        'sans': ['Nunito', 'sans-serif'],
        'serif': ['Lora', 'serif']
      },
      colors: {
        'navy': '#24305E'
      }
    },
  },
  plugins: [],
}