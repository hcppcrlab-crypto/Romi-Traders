import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",

  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}"
  ],

  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0A4EA3",
          50: "#EAF3FF",
          100: "#D3E6FF",
          200: "#A8CDFF",
          300: "#7CB4FF",
          400: "#509AFF",
          500: "#0A4EA3",
          600: "#083F84",
          700: "#063065",
          800: "#042146",
          900: "#021227"
        },

        secondary: {
          DEFAULT: "#F58220",
          50: "#FFF4EA",
          100: "#FFE7D0",
          200: "#FFD0A3",
          300: "#FFB876",
          400: "#FFA149",
          500: "#F58220",
          600: "#D96E12",
          700: "#B85A0D",
          800: "#964708",
          900: "#743405"
        },

        background: "#F8FAFC",
        surface: "#FFFFFF",
        border: "#E5E7EB",
        text: "#111827",
        muted: "#6B7280",
        success: "#16A34A",
        warning: "#F59E0B",
        danger: "#DC2626"
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

      borderRadius: {
        xs: "4px",
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        "2xl": "24px",
        full: "9999px"
      },

      boxShadow: {
        card: "0 10px 30px rgba(0,0,0,0.08)",
        hover: "0 20px 40px rgba(0,0,0,0.12)",
        button: "0 8px 20px rgba(10,78,163,0.25)"
      },

      fontFamily: {
        sans: [
          "Inter",
          "sans-serif"
        ]
      },

      transitionDuration: {
        400: "400ms"
      },

      keyframes: {
        float: {
          "0%,100%": {
            transform: "translateY(0px)"
          },
          "50%": {
            transform: "translateY(-8px)"
          }
        },

        fadeUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(25px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        }
      },

      animation: {
        float: "float 4s ease-in-out infinite",
        fadeUp: "fadeUp .6s ease forwards"
      }
    }
  },

  plugins: []
};

export default config;
