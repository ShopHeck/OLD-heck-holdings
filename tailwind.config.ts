import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist)', 'system-ui', 'sans-serif']
      },
      colors: {
        ink: '#050608',
        bone: '#f5f1e8',
        fog: '#b9c2cf',
        signal: '#9ae6ff',
        copper: '#b58b63'
      },
      boxShadow: {
        glow: '0 0 80px rgba(154, 230, 255, 0.18)'
      }
    }
  },
  plugins: []
};

export default config;
