/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.jsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Poppins, sans-serif',
      },
      colors: {
        white: '#fff',
        'neutral-bg': '#1F1F1F',
        'neutral-30': '#B3B3B3;',
        'neutral-40': '#999999',
        'neutral-50': '#808080',
        'neutral-60': '#666666',
        'neutral-70': '#4D4D4D',
        'neutral-80': '#333333',
        'neutral-90': '#1A1A1A',
        'neutral-100': '#212529',
        'neutral-black': '#000',
        'primary-500': '#274690',
        'primary-700': '#1B264F',
      },
      boxShadow: {
        sidebar: '1px 0px 24px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
