module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  presets: [require("./themeEX.preset")],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
