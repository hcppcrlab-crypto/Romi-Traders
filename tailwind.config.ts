import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",
    "./store/**/*.{js,ts,jsx,tsx}"
  ],

  theme: {
    extend: {
      colors: {
        primary: "#0A4EA3",
        secondary: "#F58220",

        success: "#16A34A",

        warning: "#F59E0B",

        danger: "#DC2626",

        dark: "#111827",

        light: "#F8FAFC",

        border: "#E5E7EB"
      },

      container: {
        center: true,

        padding: {
          DEFAULT: "1rem",

          sm: "1rem",

          md: "2rem",

          lg: "3rem",

          xl: "4rem",

          "2xl": "5rem"
        }
      },

      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "sans-serif"
        ]
      },

      borderRadius: {
        xl: "1rem",

        "2xl": "1.5rem",

        "3xl": "2rem"
      },

      boxShadow: {
        card: "0 10px 25px rgba(0,0,0,0.08)",

        hover: "0 15px 35px rgba(0,0,0,0.12)",

        primary: "0 10px 30px rgba(10,78,163,0.25)"
      },

      animation: {
        float: "float 4s ease-in-out infinite",

        fade: "fade 0.5s ease",

        pulseSlow: "pulse 3s infinite"
      },

      keyframes: {
        float: {
          "0%,100%": {
            transform: "translateY(0px)"
          },

          "50%": {
            transform: "translateY(-12px)"
          }
        },

        fade: {
          from: {
            opacity: "0"
          },

          to: {
            opacity: "1"
          }
        }
      }
    }
  },

  plugins: []
};

export default config;
