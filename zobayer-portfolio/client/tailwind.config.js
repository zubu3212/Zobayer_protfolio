const v = (n) => `rgb(var(--${n}) / <alpha-value>)`
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: { extend: {
    colors: { bg: v('bg'), surface: v('surface'), ink: v('ink'), muted: v('muted'), line: v('line'), accent: v('accent'), mint: v('mint') },
    fontFamily: { display: ['Sora', 'system-ui', 'sans-serif'], sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'] },
  } },
}
