const { colors } = require(`tailwindcss/defaultTheme`);

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        darkGrey: "#252d4b",
        lightGrey: "#545C79",
        green: "linear-gradient(100.94deg, #16B04B 22.46%, #39B54A 131.92%)",
        green2: "#00B871",
        pink: "linear-gradient(296.38deg, #FF9A9E 11.14%, #DDA9AB 89.59%)",
        orange: "linear-gradient(90deg, #FFC062 0%, #FF9F0E 100%)",
        purple: "linear-gradient(90deg, #D150FF 0%, #BD00FF 100%)",
        lightBlue: "linear-gradient(90deg, #73DDFF 0%, #00C2FF 100%)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "2rem",
        },
      },

      backgroundColor: (theme) => ({
        ...theme("colors"),
      }),

      backgroundImage: () => ({
        default: "url('../images/default_bg.png')",
        hero: "url('../images/hero_bg.png')",
        footer: "url('../images/footer_bg.png')",
      }),

      minWidth: {
        45: "45%",
      },
    },
    screens: {
      xs: "320px",
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
