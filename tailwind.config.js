module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        zentokyo: ['"Zen Tokyo Zoo"', "cursive"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
