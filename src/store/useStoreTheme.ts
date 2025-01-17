import { create } from 'zustand';

interface ThemeState {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  // traemos el dark del storage para mantenerlo en toda la app y en caso de que no le asignamos true al darkmode
  darkMode: JSON.parse(localStorage.getItem('darkMode') || 'true'),
  toggleDarkMode: () => set((state) => {
    // cambiamos el estado del darkmode
    const newDarkMode = !state.darkMode;
    // seteamos en el ls
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
    if (newDarkMode) {
      
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    return { darkMode: newDarkMode };
  }),
}));