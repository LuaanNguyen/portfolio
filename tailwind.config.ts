import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        "dashboard-card": "dashboardCard 240ms ease-out forwards",
        "card-reveal":
          "cardReveal 520ms cubic-bezier(0.22, 1, 0.36, 1) both",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        dashboardCard: {
          to: {
            opacity: "1",
            transform: "translateY(0) scale(1)",
          },
        },
        cardReveal: {
          from: {
            opacity: "0",
            transform: "translateY(14px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      colors: {
        spotify: {
          green: "#1DB954",
          black: "#191414",
          white: "#FFFFFF",
          grey: "#B3B3B3",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), addVariablesForColors],
};
export default config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
