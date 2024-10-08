import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { useMemo } from 'react'
import { fontFamilies } from '../constants/fonts'
import { fontSize, spacing } from '../constants/dimensions'
import { useTheme } from '@react-navigation/native'

const SongCart = ({ item, containerStyle, imageStyle, handlePlay }) => {
    const { colors } = useTheme();
    const styles = useMemo(() => createStyles(colors), [colors]);

    return (
        <TouchableOpacity
            onPress={() => handlePlay(item)}
            style={[styles.container, containerStyle]}>
            <Image source={{ uri: item.artwork }} style={[styles.coverImage, imageStyle]} />
            <Text style={styles.title} numberOfLines={1}>{item?.title}</Text>
            <Text style={styles.artist} numberOfLines={1}>{item?.artist}</Text>
        </TouchableOpacity>
    )
}

export default SongCart

const createStyles = (colors) => StyleSheet.create({
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