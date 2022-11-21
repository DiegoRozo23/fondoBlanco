/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {

    extend:{
      colors: {
        'indigo-lighter': '#b3bcf5',
        'indigo': '#5c6ac4',
        'indigo-dark': '#202e78',
      },
  },

},
  plugins: [require('flowbite/plugin')],
}