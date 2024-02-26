/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Quer dizer quais arquivos vão poder conter arquivo do tailwind css.
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        fontFamily: { // Tailwind usa três padrões de fontes, sans, serif e mono.
          sans: ['Inter', 'sans-serif'],
        }
      }
    },
  },
  plugins: [],
}

