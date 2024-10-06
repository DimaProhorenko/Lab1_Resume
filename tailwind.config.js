/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        padding: "2rem",
        center: true,
      },
      colors: {
        headerBg: "rgb(223, 215, 211)",
      },
    },
  },
  plugins: [],
};
