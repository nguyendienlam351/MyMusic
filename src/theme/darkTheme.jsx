import { DefaultTheme } from "@react-navigation/native"

export const darkTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: "#212832",
        textPrimary: "#FBBB4A",
        textSecondary: "#BD8522",
        iconPrimary: "#C4C4C4",
        iconSecondary: "#606060",
        minimumTintColor: "#FFCE77",
        maximumTintColor: "#555B6A"
    },
}