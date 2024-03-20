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
      },
      screens:{
        xl:"1200px",
        lg:"950px",
        md:"650px",
        sm:"450px",
        xs:"375px",
      }
    },
  },
  plugins: [],
};
export default config;
