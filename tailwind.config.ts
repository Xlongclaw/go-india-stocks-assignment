import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        "x-accent-base":"#222831",
        "x-accent-light":"#31363F",
        "x-sky-blue":"#76ABAE",
        "x-light-white":"#EEEEEE",
      }
    },
  },
  plugins: [],
};
export default config;
