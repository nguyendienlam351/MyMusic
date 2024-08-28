import { DefaultTheme } from "@react-navigation/native"

export const lightTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: "#F7FAFF",
        textPrimary: "#091123",
        textSecondary: "#8996BB",
        iconPrimary: "#091127",
        iconSecondary: "#8996B8",
        minimumTintColor: "#091227",
        maximumTintColor: "#D3D7DF"
    },
}