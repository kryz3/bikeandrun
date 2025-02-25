/** @type {import('tailwindcss').Config} */
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
        'bnr-rose': '#fea0a1',
        'bnr-orange': '#f68f02',
        'bnr-jaune': '#fdb515',
        'bnr-bleu': '#76ccee',
      },
    },
  },
  plugins: [],
};
