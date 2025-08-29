import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#005AA9", // azul WEG aproximado
          50: "#E6F0FA",
          100: "#CCE0F5",
          200: "#99C1EB",
          300: "#66A2E1",
          400: "#3383D7",
          500: "#0C6BCF",
          600: "#0A59AC",
          700: "#084689",
          800: "#063466",
          900: "#042343",
        },
      },
      keyframes: {
        pulseGentle: {
          "0%,94%,100%": { transform: "scale(1)" },
          "95%": { transform: "scale(1.05)" },
          "97%": { transform: "scale(1.08)" },
          "99%": { transform: "scale(1.03)" }
        },
        spinY: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" }
        }
      },
      animation: {
        pulseGentle: "pulseGentle 15s ease-out infinite",
      },
      boxShadow: {
        soft: "0 6px 30px rgba(0,0,0,.12)",
      }
    },
  },
  plugins: [],
};

export default config;
