module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './widgets/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      lineHeight: {
        12: '3rem',
      },
      colors: {
        gray2: {
          full: '#969696',
          lightest: '#5A5A5A',
          lighter: '#464646',
          light: '#313131',
          dark: '#282828',
        },
      },
      keyframes: {
        hue: {
          from: { filter: 'hue-rotate(0deg)' },
          to: { filter: 'hue-rotate(360deg)' },
        },
      },
      animation: {
        hue: 'hue 10s infinite linear',
      },
    },
    fontFamily: {
      sans: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
