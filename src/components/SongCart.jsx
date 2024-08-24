import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../constants/color'
import { fontFamilies } from '../constants/fonts'
import { fontSize, spacing } from '../constants/dimensions'

const imgUrl = "https://linkstorage.linkfire.com/medialinks/images/4bc7191b-d494-450e-ae1f-2f74c932bfae/artwork-440x440.jpg"

const SongCart = ({ containerStyle, imageStyle }) => {
    return (
        <TouchableOpacity style={[styles.container, containerStyle]}>
            <Image source={{ uri: imgUrl }} style={[styles.coverImage, imageStyle]} />
            <Text style={styles.title} numberOfLines={1}>jealous</Text>
            <Text style={styles.artist}>The Trinity</Text>
        </TouchableOpacity>
    )
}

export default SongCart

const styles = StyleSheet.create({
    container: {
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