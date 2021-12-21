module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
    extend: {
      colors: {
        primary: {
          50: "#faece9",
          100: "#f4d9d3",
          200: "#e9b3a7",
          300: "#df8c7c",
          400: "#d46650",
          500: "#c94024",
          600: "#b53a20",
          700: "#a1331d",
          800: "#8d2d19",
          900: "#792616",
        },
        secondary: {
          50: "#f9f2e8",
          100: "#ecd7bb",
          200: "#e0bd8d",
          300: "#d4a35f",
          400: "#c78832",
          500: "#c17b1b",
          600: "#ae6f18",
          700: "#9a6216",
          800: "#875613",
          900: "#744a10",
        },
        tertiary: {
          50: "#f1f2ec",
          100: "#d6d8c7",
          200: "#bbbea2",
          300: "#a0a47c",
          400: "#858a57",
          500: "#777d44",
          600: "#6b713d",
          700: "#5f6436",
          800: "#535830",
          900: "#474b29",
        },
      },
      animation: {
        "ping-slow": "ping 3s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
