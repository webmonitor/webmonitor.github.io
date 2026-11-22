/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './docs/index.html', './en/**/*.html', './*.tsx', './components/**/*.tsx', './docs/**/*.tsx', './config/**/*.ts', './content/**/*.ts'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans SC', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        serif: ['Noto Serif SC', 'Songti SC', 'Source Han Serif SC', 'Georgia', 'serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      colors: {
        background: '#f4f1ea',
        surface: '#fbfaf6',
        raised: '#ebe6dc',
        text: '#1d211d',
        secondary: '#4f554d',
        muted: '#686e65',
        line: '#d8d4c9',
        accent: '#285c46',
        accentDeep: '#1d4534',
        signal: '#a04f3a',
        code: '#20241f',
        codeText: '#f2f0e8',
      },
      boxShadow: {
        card: '0 2px 8px rgba(29, 33, 29, 0.05)',
      },
    },
  },
};
