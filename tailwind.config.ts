import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      'xs':'300px',
      'sm': '640px',  // Commonly used starting point for small screens (e.g., mobile)
      'md': '960px',  // Medium screens (e.g., tablets)
      'lg': '1440px', // Large screens (e.g., desktops)
    },
  },
  plugins: [],
};

export default config;
