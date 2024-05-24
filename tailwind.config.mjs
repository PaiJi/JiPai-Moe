/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#83A2C5",
        "primary-light": "#E5EEF8",
        "gray-102": "rgba(102,102,102,0.73)",
        "dark-666": "#666666",
        malibu: "#6CB0FF",
        steelBlue: "#467CBA",
        "background-main": "var(--background-main)",
        "primary-blue": "var(--primary-blue)",
        "primary-blue-dark": "var(--primary-blue-dark)",
        "primary-blue-light": "var(--primary-blue-light)",
        "text-dark": "var(--text-dark)",
        "text-dark-light": "var(--text-dark-light)",
      },
      borderRadius: {
        large: "80px",
      },
    },
  },
  plugins: [],
};
