/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        ox: ['Oxanium', 'Arial', 'sans-serif'],
        // Add more font families as needed
      },
  },
},
  plugins: [],
}

