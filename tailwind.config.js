const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        zentokyo: ['"Zen Tokyo Zoo"', "cursive"],
      },
      animation: {},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const animations = {
        ".animate-shine": {
          color: "transparent",
          backgroundImage: "linear-gradient(120deg, #000 45%, #fff, #000 55%)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
          backgroundSize: "250% 100%",
          webkitBackgroundClip: "text",
          backgroundClip: "text",
          "&:hover": {
            animationName: "bgShift",
            animationDuration: "1s",
          },
        },
        "@keyframes bgShift": {
          "0%": { backgroundPosition: "right" },
          "100%": { backgroundPosition: "left" },
        },

        ".animate-pulse-strong": {
          animationName: "pulse",
          animationDuration: "1s",
          animationIterationCount: "infinite",
        },
        "@keyframes pulse": {
          "0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0",
          },
        },
      };

      addUtilities(animations);
    }),
  ],
};
