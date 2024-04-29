/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    autoprefixer: {},
  },
}

