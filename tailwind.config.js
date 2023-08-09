/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        ksl_light_red: "#FFF9F9",
        ksl_light_red_200: "#FFF4F4",
        ksl_light_red_600: "#FFCFCF",
        ksl_dark_red: "#D9171A",
        ksl_dark_black: "#151515",
        ksl_light_black: "#2F363F",
        ksl_white: "#FFFFFF",
        ksl_light_gray: "#686868",
        ksl_dark_gray: "#454545",
        ksl_dark_yellow: "#F4C900",
        ksl_dark_yellow_50: "#FFEEE9",
        ksl_paste: "#00C9FE",
        ksl_light_green: "#8FFD9F",
        ksl_light_green_200: "#33D49D",
        ksl_green_text: "#00AC1D",
        ksl_green: "#B4E3B9",
        ksl_red_text: "#d9171a",
        ksl_red: "#F3B3B4",
        ksl_orange_text: "#FF5722",
        ksl_orange: "#FFCBBC",
        ksl_blue_text: "#0078D7",
        ksl_blue: "#B6D4F0",
        ksl_media_1: "#244846",
        ksl_media_2: "#454545",
        ksl_media_3: "#efbf28",
        ksl_media_4: "#0b1f63",
        ksl_media_5: "#04a750",
        ksl_media_6: "#d9171a",
        ksl_media_7: "#04a750",
      },
      fontSize: {
        text_56: "56px",
        text_41: "41px",
        text_36: "36px",
        text_18: "18.72px",
        text_15: "15px",
        text_14: "14px",
        text_13: "13px",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        mulish: ["Mulish", "sans-serif"],
      },
      fontWeight: {
        thin: "100",
        hairline: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        "extra-bold": "800",
        black: "900",
      },
      boxShadow: {
        customred: "0 10px 18px 0 rgba(217, 23, 26, 1)",
      },
      screens: {
        xsm: { min: "280px", max: "639px" },
        // => @media (min-width: 280px) { ... }
        sm: { min: "640px", max: "767px" },
        // => @media (min-width: 640px and max-width: 767px) { ... }
        md: { min: "768px", max: "1023px" },
        // => @media (min-width: 640px and max-width: 767px) { ... }
        mdl: { min: "1024px", max: "1279px" },
        // => @media (min-width: 640px and max-width: 767px) { ... }
        xl: { min: "1280px", max: "1737px" },
        // => @media (min-width: 1366px and max-width: 1737px) { ... }
        "2xl": { min: "1738px" },
        // => @media (min-width: 1366px and max-width: 1737px) { ... }
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
