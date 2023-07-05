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

      backgroundImage: {
        'canvas-bg': 'url("https://img.wallscloud.net/uploads/thumb/1098706115/%D0%93%D0%B0%D0%BB%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D0%B0,_Galaxy,_%D0%9F%D0%BB%D0%B0%D0%BD%D0%B5%D1%82%D0%B0,_%D0%9A%D0%BE%D1%81%D0%BC%D0%BE%D1%81,_Space,_%D0%97%D0%B2%D0%B5%D0%B7%D0%B4%D1%8B-1024x576-MM-80.webp")',
      },
  },
},
  plugins: [],
}

