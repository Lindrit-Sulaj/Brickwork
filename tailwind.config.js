/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './containers/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        gold: '#FFD60A',
        mikado: '#FFC300',
        yaleBlue: '#003566',
        oxfordBlue: '#001D3D'
      },
      screens: {
        web: '1200px'
      }
    },
  },
  plugins: [],
}
