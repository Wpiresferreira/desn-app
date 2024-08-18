import { height } from "@fortawesome/free-solid-svg-icons/fa0";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'up-normal': 'up 2s',
      },
      keyframes: {
        up: {
          '0%': { height: '100vh' },
          '50%': { height: '100vh' },
          '100%': { height: '15vh' },
        }
      },
      
      colors:{
        'color1' : '#E68A22',
        'color2' : '#C90A00',
        'color3' : '#452B34',
        'color4' : '#88d1ca',
        'color5' : '#ded6c9',
        'color10' : '#E68A22a0',
        'color20' : '#C90A00a0',
        'color30' : '#452B34e0',
        'color40' : '#88d1caa0',
        'color50' : '#ded6c9a0'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
