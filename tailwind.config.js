/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      segoe: [
        'Segoe UI',
        'Tahoma',
        'Geneva',
        'Verdana',
        'sans-serif',
      ],
      bangers: ['Bangers', 'sans-serif'],
      ubuntu: ['Ubuntu', 'sans-serif'],
    },
  },
  plugins: [],
};
