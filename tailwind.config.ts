import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#DFDFF0",
          75: "#DFDFF2",
          100: "#F0F2FA",
          300: "#4FB7DD"         
        },
        dark: {
          500: "#010101"
        },
        violet:{
          300: "#5724FF"
        },
        yellow: {
          100: "#8E983F",
          300: "#EDFF66"
        }
      },
      fontFamily: {
        robert: 'var(--robert), sans-serif',
        zentry: 'var(--zentry), sans-serif',
        general: 'var(--general), sans-serif',
        circular: 'var(--circular), sans-serif',
      },
    },
  },
  plugins: [],
} satisfies Config;
