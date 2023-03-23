/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "primary": ['Mukta', 'sans-serif'],
        "secondary": ['Quicksand', 'sans-serif']
      },
      colors: {
        "green": "#DFFFD8",
        "blue": {
          "primary": "#95BDFF",
          "secondary": "#B4E4FF"
        },
        "cream-light": "#F7F5EB",
        "pink": "#F7CBE0",
        "dark-purple": "#65647C",
        "brown": "#8B7E74",
        "white-new": "#F9F9F9",
      }
    },
  },
  plugins: [],
}