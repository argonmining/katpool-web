/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#70C7BA',
        dark: '#231F20',
        light: '#B6B6B6',
        accent: '#49EACB',
        // Override Tremor's dark mode colors to match your theme
        'tremor-background': '#f1f1f1',
        'tremor-card': '#70C7BA',
        'tremor-line': '#49EACB',
      },
    },
  },
  plugins: [require('@headlessui/tailwindcss'), require('@tailwindcss/forms')],
};
