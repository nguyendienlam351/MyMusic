import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../constants/color'
import { fontFamilies } from '../constants/fonts'
import { fontSize, spacing } from '../constants/dimensions'
import TrackPlayer from 'react-native-track-player'

const imgUrl = "https://linkstorage.linkfire.com/medialinks/images/4bc7191b-d494-450e-ae1f-2f74c932bfae/artwork-440x440.jpg"

const SongCart = ({ item, containerStyle, imageStyle, handlePlay }) => {
    return (
        <TouchableOpacity
            onPress={() => handlePlay(item)}
            style={[styles.container, containerStyle]}>
            <Image source={{ uri: item.artwork }} style={[styles.coverImage, imageStyle]} />
            <Text style={styles.title} numberOfLines={1}>{item?.title}</Text>
            <Text style={styles.artist}>{item?.artist}</Text>
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