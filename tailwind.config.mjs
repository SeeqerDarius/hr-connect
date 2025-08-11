/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A1C63',
        primary: '#FF8C00',
        pink: '#D63384',
        teal: '#1DA1A3',
        yellow: '#F39C12',
        dark: '#1E293B',
      },
    },
  },
  plugins: [],
}

export default config
