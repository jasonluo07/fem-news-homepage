import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'almost-white': '#fffdfa',
        'dark-space-blue': '#00001a',
        gunmetal: '#5e607a',
        'light-vermilion': '#f15d51',
        silver: '#c5c6ce',
        yellow: '#e9aa52',
      },
    },
  },
  plugins: [],
};
export default config;
