import { DefaultTheme } from "@react-navigation/native"

export const lightTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: "#E5E7EC",
        textPrimary: "#c38518",
        textSecondary: "#875906",
        iconPrimary: "#281d08",
        iconSecondary: "#af976c",
        minimumTintColor: "#302614",
        maximumTintColor: "#dedad3"
    },
}