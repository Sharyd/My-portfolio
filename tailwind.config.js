/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'email-bg': "url('/public/assets/email-bg.jpg')",
      },
      fontFamily: {
        custom: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        'infinite-rotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'bouncing-first': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.4)' },
          '100%': { transform: 'scale(1)' },
        },
        'bouncing-second': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
        'infinite-falling': {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '25%': { transform: 'translateY(0%)', opacity: '0.75' },
          '50%': { transform: 'translateY(100%)', opacity: '1' },
          '100%': { transform: 'translateY(300%)', opacity: '0' },
        },
        'animated-line': {
          '0%': { width: '0rem', opacity: '0' },
          '100%': { width: '-10rem', opacity: '1' },
        },
      },

      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'infinite-rotate': 'infinite-rotate 8s linear infinite',
        'bouncing-first': 'bouncing-first 6s linear infinite',
        'bouncing-second': 'bouncing-second 6s linear infinite',
        'infinite-falling': 'infinite-falling 8s linear infinite',
        'animated-line': 'animated-line 0.4s linear',
      },
    },
  },
  plugins: [],
};
