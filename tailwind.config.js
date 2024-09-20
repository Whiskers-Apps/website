/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors:{
        "neutral-two": "#0E0600",
        "neutral-four": "#1B0B00",
        "neutral-six": "#301300",
        "text": "#FFEEE2",
        "text-two": "#E5D2C5",
        "text-three": "#CFBBAD",
        "banana": "#ffe072"
      }
    },
  },
  plugins: [],
}

