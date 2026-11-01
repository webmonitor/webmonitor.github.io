/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './docs/index.html', './*.tsx', './components/**/*.tsx', './config/**/*.ts', './data/**/*.ts'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Serif SC', 'Songti SC', 'Source Han Serif SC', 'serif'],
        serif: ['Noto Serif SC', 'Songti SC', 'Source Han Serif SC', 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'Noto Serif SC', 'serif'],
      },
      colors: {
        background: '#f5f3ef',
        surface: '#fbfaf8',
        raised: '#efe9df',
        text: '#171412',
        secondary: '#4a443b',
        muted: '#6b6459',
        line: '#ded8cf',
        accent: '#324360',
        accentDeep: '#283650',
        signal: '#d2a047',
      },
      boxShadow: {
        card: '0 1px 2px rgba(23, 20, 18, 0.04)',
      },
    },
  },
};
