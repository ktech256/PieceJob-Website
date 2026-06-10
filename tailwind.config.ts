import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          customer: {
            red: "#410200",
            mauve: "#4A2C2A",
            cream: "#EFDECD",
          },
          provider: {
            green: "#006400",
            olive: "#737000",
            gray: "#91A3B0",
          },
        },
        neutral: {
          dark: "#0A0A0A",
          light: "#FFFFFF",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        display: ["var(--font-cabinet-grotesk)"],
      },
    },
  },
  plugins: [],
};
export default config;
