/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background-color)',
        container: 'var(--container-color)',
        stroke: 'var(--stroke-color)',
        primary: 'var(--primary-color)',
        text: 'var(--title-color',
        text: 'var(--text-color)',
        subtext: 'var(--text-secondary)',
      },
      backgroundImage: {
        'dots': 'var(--dots)',
        'endless-clouds': "url('../assets/endless-clouds.svg')"
      }
    }
  },
  plugins: [],
};
