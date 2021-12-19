const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./component/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        zentokyo: ['"Zen Tokyo Zoo"', "cursive"],
        montserrat: ['"Montserrat"', "sans-serif"]
      },
      colors: {
        primary: "#005F73",
        secondary: "#0A9396",
        tertiary: "#94D2BD"
      },
      backgroundImage: {
        "gradient-conic-flag":
          // "conic-gradient(from -135deg, var(--tw-gradient-from) 0 90deg, var(--tw-gradient-to) 0)"
          "conic-gradient(from -135deg, var(--tw-gradient-from) 0 90deg, #0000 0)"
      },
      animation: {}
    }
  },
  variants: {
    extend: {}
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
            animationDuration: "1s"
          }
        },
        "@keyframes bgShift": {
          "0%": { backgroundPosition: "right" },
          "100%": { backgroundPosition: "left" }
        },

        ".animate-shine-block": {
          backgroundImage: "radial-gradient(5% 10% at 70% 30%, #FFF, #0000)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "0% 0%",
          animationName: "bgShiftToUpper",
          animationDuration: "0.5s"
        },
        "@keyframes bgShiftToUpper": {
          "0%": {
            backgroundSize: "0% 0%",
            backgroundPosition: "100% 0%"
          },
          "100%": {
            backgroundSize: "150% 200%",
            backgroundPosition: "40% 80%"
          }
        },

        ".animate-pulse-strong": {
          animationName: "pulse",
          animationDuration: "1s",
          animationIterationCount: "infinite"
        },
        "@keyframes pulse": {
          "0%, 100%": {
            opacity: "1"
          },
          "50%": {
            opacity: "0"
          }
        },

        ".animate-inverted-hover-b": {
          color: "transparent",
          background:
            "radial-gradient(50% 100% at bottom, #fff 97%, #000), radial-gradient(50% 100% at bottom, #0A9396 97%, #0000), #888",
          "-webkit-background-clip": "text,padding-box,text",
          "background-clip": "text,padding-box,text",
          "background-size": "0% 0%",
          "background-position": "bottom",
          "background-repeat": "no-repeat",
          transition: "0.1s"
        },
        ".animate-inverted-hover-b:hover": {
          "background-size": "110% 40%"
        }
      };

      addUtilities(animations);
    })
  ]
};
