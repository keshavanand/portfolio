/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'moving-line': {
            from: {
                transformY: '-100%',
                opacity: '0',
            },
            to: {
                transformY: '0',
                opacity: '1',
            },
          },
      },
      animation: {
          'moving-line': 'moving-line 1.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}