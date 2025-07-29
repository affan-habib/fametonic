/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'urbanist': ['var(--font-urbanist)', 'sans-serif'],
        'figtree': ['var(--font-figtree)', 'sans-serif'],
        'nunito': ['var(--font-nunito)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}