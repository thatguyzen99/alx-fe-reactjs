/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // Replaces "purge"
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: { // Added for task compliance, though optional in v3+
    extend: {},
  },
  plugins: [],
};