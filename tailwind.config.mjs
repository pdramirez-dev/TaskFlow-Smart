/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        slate: {
          950: "#0d1624"
        },
        brand: {
          50: "#eef6ff",
          100: "#d9ebff",
          200: "#bad9ff",
          300: "#8ec0ff",
          400: "#5f9cff",
          500: "#2f75ff",
          600: "#215ae0",
          700: "#1e47b1",
          800: "#1d3d8c",
          900: "#1d366f"
        }
      },
      boxShadow: {
        halo: "0 30px 80px -40px rgba(47, 117, 255, 0.45)"
      },
      fontFamily: {
        display: ["'Plus Jakarta Sans'", "ui-sans-serif", "system-ui"],
        body: ["'Inter'", "ui-sans-serif", "system-ui"]
      }
    }
  },
  plugins: []
};
