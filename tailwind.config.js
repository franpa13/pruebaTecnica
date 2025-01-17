

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkPrimary: "#121212", // principal fondo
        darkSecondary: "#1E1E1E", // fondo secundario
        lightText: "#EAEAEA", // texto claro
        mutedText: "#B3B3B3", // subtitlos
        neonPurple: "#BB86FC", // morado
        neonTurquoise: "#03DAC6", // tuequesa
        successGreen: "#4CAF50", // success
        errorRed: "#F44336", //error
        warningYellow: "#FFC107", // warning
        customBlue: "#1e90ff", // blue 
        accentBlue: "#4682B4", // blue detail
        brightBlue: "#00BFFF", // heavy blue
      },
    },
  },

  darkMode: 'class',
};
