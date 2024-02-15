/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        input: "var(--input)",
        active: "var(--active)",
        card: "var(--card)",
      },
      fontFamily: {
        sans: "var(--vietnamPro)",
      },
    },
    plugins: [],
  },
};
