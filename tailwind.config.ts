import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        leaf: {
          50: '#f2f8ee',
          100: '#e0efd7',
          200: '#c2e0b1',
          300: '#97c97f',
          400: '#6aad50',
          500: '#4a9035',
          600: '#39722a',
          700: '#2e5b25',
          800: '#264a21',
          900: '#1d3a1a',
          950: '#0f2010',
        },
        sand: {
          50: '#faf8f2',
          100: '#f3efe3',
          200: '#e7dfc8',
          300: '#d6c9a6',
        },
        clay: {
          400: '#d98c63',
          500: '#c8764b',
          600: '#a9603a',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(38, 74, 33, 0.25)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'fade-up': 'fade-up 0.6s ease-out both',
        shimmer: 'shimmer 1.8s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
