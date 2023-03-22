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
      },
      colors: {
        "green": "#DFFFD8",
        "blue": {
          "primary": "#95BDFF",
          "secondary": "#B4E4FF"
        },
      }
    },
  },
  plugins: [],
}