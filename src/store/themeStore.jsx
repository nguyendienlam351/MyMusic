import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";

const useThemeStore = create((set) => ({
    isDarkTheme: true,
    toggleTheme: (value) => {
        set((state) => {
            const darkTheme = value ? value : !state.isDarkTheme
            AsyncStorage.setItem('isDarkTheme', darkTheme === true ? "true" : "false");
            return ({ isDarkTheme: darkTheme });
        })
    },
    loadTheme: async () => {
        try {
            const darkTheme = await AsyncStorage.getItem('isDarkTheme');

            if (darkTheme) {
                set({ isDarkTheme: darkTheme === "true" ? true : false });
            }
            return true
        } catch (error) { }
    },
}))

export default useThemeStore