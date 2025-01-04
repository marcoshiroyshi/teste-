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
        background: "var(--background)",
        foreground: "var(--foreground)",
        customYellow: "#ffcb47",
        customGray: '#202020',
      },
      height: {
        '45vh': "45vh",
        '60vh': "60vh",
      }
    },
  },
  plugins: [],
} satisfies Config;
