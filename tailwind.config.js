/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#336699",
        onPrimary: "#2E5D8B",
        onPrimaryContainer: "#FBFEFF",
        secondary: "#1E1C1C",
        background: "#FDFBFC",
        error: "#FF4040",
        success: "#117E45",
        gray: { DEFAULT: "#D9D9D9", light: "#E9E8E9", dark: "#545454" },
      },
      animation: {
        slidein: "slidein 0.3s ease-in-out",
      },
      keyframes: {
        slidein: {
          "0%": {
            transform: "translateX(-100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
