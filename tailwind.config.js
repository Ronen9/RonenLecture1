/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'blob1': 'blob1 25s infinite',
        'blob2': 'blob2 30s infinite',
        'blob3': 'blob3 35s infinite',
      },
      keyframes: {
        blob1: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30%, -20%) scale(1.1)' },
          '66%': { transform: 'translate(-20%, 20%) scale(0.9)' },
        },
        blob2: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(-30%, 30%) scale(1.1)' },
          '66%': { transform: 'translate(20%, -20%) scale(0.9)' },
        },
        blob3: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(25%, 25%) scale(0.9)' },
          '66%': { transform: 'translate(-25%, -15%) scale(1.1)' },
        },
      },
    },
  },
  plugins: [],
};
