/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "1rem",
        xl: "4.375rem",
        "2xl": "4.375rem",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        BG: {
          50: "#e7e6ea",
          100: "#b5b0bd",
          200: "#918a9d",
          300: "#5f5471",
          400: "#403355",
          500: "#10002b",
          600: "#0f0027",
          700: "#0b001f",
          800: "#090018",
          900: "#070012",
        },
        primary: {
          50: "#ece6f0",
          100: "#c3b3d1",
          200: "#a58ebb",
          300: "#7c5a9d",
          400: "#633a89",
          500: "#3c096c",
          600: "#370862",
          700: "#2b064d",
          800: "#21053b",
          900: "#19042d",
        },
        lightBg: {
          50: "#fcf7ff",
          100: "#f5e5ff",
          200: "#f1d8ff",
          300: "#eac6ff",
          400: "#e6bbff",
          500: "#e0aaff",
          600: "#cc9be8",
          700: "#9f79b5",
          800: "#7b5e8c",
          900: "#5e476b",
        },
      },
    },
  },
  plugins: [
    ({ addVariant }) => {
      addVariant("child", "&>*");
      addVariant("child-hover", "&>*:hover");
    },
    ({ addUtilities }) => {
      addUtilities({
        ".text-Pinar-Bold": {
          fontFamily: "Pinar-Bold",
        },
        ".text-Pinar-Black": {
          fontFamily: "Pinar-Black",
        },
        ".text-Pinar-ExtraBold": {
          fontFamily: "Pinar-ExtraBold",
        },
        ".textPinar-Light": {
          fontFamily: "Pinar-Light",
        },
        ".text-Pinar-Medium": {
          fontFamily: "Pinar-Medium",
        },
        ".text-Pinar-Regular": {
          fontFamily: "Pinar-Regular",
        },
        ".text-Pinar-SemiBold": {
          fontFamily: "Pinar-SemiBold",
        },
        ".text-Roboto-Bold": {
          fontFamily: "Roboto-Bold",
        },
        ".text-Roboto-Black": {
          fontFamily: "Roboto-Black",
        },
        ".text-Roboto-Thin": {
          fontFamily: "Roboto-Thin",
        },
        ".text-Roboto-Light": {
          fontFamily: "Roboto-Light",
        },
        ".text-Roboto-Medium": {
          fontFamily: "Roboto-Medium",
        },
        ".text-Roboto-Regular": {
          fontFamily: "Roboto-Regular",
        },
      });
    },
  ],
};
