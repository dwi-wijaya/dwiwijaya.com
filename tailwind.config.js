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
        title: 'var(--title-color)',
        text: 'var(--text-color)',
        subtext: 'var(--text-secondary)',
      },
      backgroundImage: {
        'dots': 'var(--dots)',
        'endless-clouds': "url('../assets/endless-clouds.svg')"
      },
      gridTemplateColumns: {
        '3fr': 'repeat(3, 140px)',
      },
      aspectRatio: {
        'thumbnail': '2',
      },
      keyframes: {
        scroll: {
          '0%': {
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
        scroll2: {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-200%)',
          },
        },
      },
      animation: {
        'loop-1' : 'scroll var(--time) linear infinite',
        'loop-2' : 'scroll2 var(--time) linear infinite',
      },
    }
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
