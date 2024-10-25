import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary-blue": "#3556AB",
        "primary-gold": "#CDE53D",
        "dark-blue": "#071D55",
        "primary-yellow": "#F2C94C",
        "dark-green": "#399649",
        "primary-green": "#53DA69",
        "border-green": "#49C25D",
        "primary-gray": "#8D8D8D",
        "primary-red": "#AB3535",
      },
      boxShadow: {
        "right-lg": "0 0 20px -10px rgba(0, 0, 0, 0.28)",
      },
    },
  },
  plugins: [require("tailwind-extended-shadows")],
};
export default config;
