import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dm-sans)", ...fontFamily.sans],
        inter: ["var(--font-inter)", ...fontFamily.sans],
        outfit: ["var(--font-outfit)", ...fontFamily.sans],
        geist: ["var(--font-geist-sans)", ...fontFamily.sans],
        mono: ["var(--font-geist-mono)", ...fontFamily.mono],
        korolev: ["korolev-condensed", "sans-serif"],
      },
      colors: {
        firebrick: {
          DEFAULT: "#B22222", // Base color
          light: "#D24C4C",  // For paragraphs
          deep: "#8B1A1A",   // For headings
          dark: "#5A1212",   // For button backgrounds
          soft: "#F08080",   // For button text
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    
  ],
} satisfies Config;
