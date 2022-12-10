/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        'xl': [
          // '0 15px 15px #0ab5d5',
          '5px 15px 15px #3986f4'
        ]
      },
    },
  },
  plugins: [require("daisyui")],
}
