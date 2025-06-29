/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.html",
    "./main.js",     // explicitly include root-level JS files
    "./counter.js",  // if needed
    "./src/**/*.{js,ts,jsx,tsx}" // good practice if using a src folder
  ],
  theme: {
    extend: {
      fontFamily: {
        'didot': ['"Didot"', '"Playfair Display"', 'serif'],
        'signature': ['"Snell Roundhand"', '"Segoe Script"', 'cursive'],
      },
      colors: {
        'sakura': '#f8c9d0',
        'sakura-light': '#fad4da',
        'glass-dark': '#101113',
        'glass-blue': '#1c212e',
      },
      backdropBlur: {
        'glass': '12px',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease-out',
        'card-tilt': 'cardTilt 0.2s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        cardTilt: {
          '0%': {
            transform: 'rotateX(0deg) rotateY(0deg) translateY(0px)',
          },
          '100%': {
            transform: 'rotateX(var(--tilt-x)) rotateY(var(--tilt-y)) translateY(-4px)',
          },
        },
      },
    },
  },
  plugins: [],
}