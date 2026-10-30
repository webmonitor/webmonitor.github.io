/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './docs/index.html', './*.tsx', './components/**/*.tsx', './config/**/*.ts', './data/**/*.ts'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Serif SC', 'serif'],
        serif: ['Noto Serif SC', 'serif'],
      },
      colors: {
        background: '#f5f3ef',
        surface: '#fbfaf8',
        text: '#111111',
        muted: '#666666',
        line: '#ded8cf',
        accent: '#111111',
      },
      boxShadow: {
        soft: '0 0 0 rgba(17, 17, 17, 0)',
      },
    },
  },
};
