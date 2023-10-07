/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Lexend'],
      },
      colors: {
        'text-night': '#e5edf0',
        'background-night': '#090e10',
        'primary-night': '#293f47',
        'secondary-night': '#131d20',
        'accent-night': '#5d90a2',
       },
    },  
  },
  plugins: [],
}