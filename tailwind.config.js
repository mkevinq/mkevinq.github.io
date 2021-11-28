module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './constants/**/*.{js,ts,jsx,tsx}',
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
          full: 'rgba(150,150,150,var(--tw-bg-opacity))',
          lightest: 'rgba(90,90,90,var(--tw-bg-opacity))',
          lighter: 'rgba(75,75,75,var(--tw-bg-opacity))',
          light: 'rgba(49,49,49,var(--tw-bg-opacity))',
          dark: 'rgba(28,28,28,var(--tw-bg-opacity))',
        },
      },
      keyframes: {
        hue: {
          from: { filter: 'hue-rotate(0deg)' },
          to: { filter: 'hue-rotate(360deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
      },
      animation: {
        hue: 'hue 10s infinite linear',
        wiggle: 'wiggle 2s infinite ease-in-out',
        huewiggle: 'hue 10s infinite linear, wiggle 4s infinite ease-in-out',
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
