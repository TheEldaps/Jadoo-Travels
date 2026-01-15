/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        volkhov: ["var(--font-volkhov)", "serif"],
        openSans: ["var(--font-open-sans)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      },
      animation: {
        carousel: "carousel 25s linear infinite",
      },
      keyframes: {
        carousel: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
    plugins: [],
  };
