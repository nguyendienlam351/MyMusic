import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/color'
import { fontFamilies } from '../constants/fonts'
import { fontSize, spacing } from '../constants/dimensions'

const imgUrl = "https://linkstorage.linkfire.com/medialinks/images/2428851f-c910-4a82-953b-63cfa1a5134e/artwork-440x440.jpg"

const SongCart = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image source={{ uri: imgUrl }} style={styles.coverImage} />
            <Text style={styles.title}>Follow Back</Text>
            <Text style={styles.artist}>LXNGVX</Text>
        </TouchableOpacity>
    )
}

export default SongCart

const styles = StyleSheet.create({
    container: {
        height: 330,
        width: 250,
    },
    coverImage: {
        width: 250,
        height: 250,
        borderRadius: 10
    },
    title: {
        color: colors.textPrimary,
        fontFamily: fontFamilies.medium,
        textAlign: "center",
        fontSize: fontSize.lg,
        paddingVertical: spacing.sm
    },
    artist: {
        color: colors.textSecondary,
        fontFamily: fontFamilies.regular,
        textAlign: "center",
        fontSize: fontSize.md,
    }
})