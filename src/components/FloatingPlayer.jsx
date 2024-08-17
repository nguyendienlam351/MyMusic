import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/color'
import { fontSize, iconSize, spacing } from '../constants/dimensions'
import { fontFamilies } from '../constants/fonts'
import { GotoNextButton, GotoPreviousButton, PlayPauseButton } from './PlayerControl'


const imgUrl = "https://linkstorage.linkfire.com/medialinks/images/2428851f-c910-4a82-953b-63cfa1a5134e/artwork-440x440.jpg"

const FloatingPlayer = () => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: imgUrl }} style={styles.coverImage} />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Follow Back</Text>
                <Text style={styles.artist}>LXNGVX</Text>
            </View>
            <View style={styles.playerControlContainer}>
                <GotoPreviousButton size={iconSize.md} />
                <PlayPauseButton size={iconSize.lg} />
                <GotoNextButton size={iconSize.md} />
            </View>
        </View>
    )
}

export default FloatingPlayer

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center"
    },
    coverImage: {
        height: 70,
        width: 70
    },
    titleContainer: {
        flex: 1,
        paddingHorizontal: spacing.sm
    },
    title: {
        color: colors.textPrimary,
        fontSize: fontSize.lg,
        fontFamily: fontFamilies.medium
    },
    artist: {
        color: colors.textSecondary,
        fontSize: fontSize.md,
    },
    playerControlContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
        paddingRight: spacing.lg
    }
})