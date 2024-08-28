import { create } from "zustand";

const useThemeStore = create((set) => ({
    isDarkTheme: true,
    toggleTheme: (value) =>
        set((state) => ({ isDarkTheme: value ? value : !state.isDarkTheme }))
}))

export default useThemeStore