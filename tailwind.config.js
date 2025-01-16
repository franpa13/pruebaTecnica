import animations from '@midudev/tailwind-animations';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkPrimary: "#121212", // Fondo principal oscuro
        darkSecondary: "#1E1E1E", // Fondo secundario
        lightText: "#EAEAEA", // Texto claro
        mutedText: "#B3B3B3", // Texto menos destacado
        neonPurple: "#BB86FC", // Morado neón
        neonTurquoise: "#03DAC6", // Verde turquesa
        successGreen: "#4CAF50", // Verde de éxito
        errorRed: "#F44336", // Rojo de error
        warningYellow: "#FFC107", // Amarillo de advertencia
        customBlue: "#1e90ff", // Azul brillante
        accentBlue: "#4682B4", // Azul para detalles
        brightBlue: "#00BFFF", // Azul brillante
      },
    },
  },
  plugins: [animations],
  darkMode: 'class', // Habilitar el modo oscuro usando clases
};
