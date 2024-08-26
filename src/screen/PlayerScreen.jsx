import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/color'
import { fontSize, iconSize, spacing } from '../constants/dimensions'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import { fontFamilies } from '../constants/fonts'
import PlayerRepeatToggle from '../components/PlayerRepeatToggle'
import PlayerShuffleToggle from '../components/PlayerShuffleToggle'
import PlayerProgressBar from '../components/PlayerProgressBar'

const imgUrl = "https://linkstorage.linkfire.com/medialinks/images/4bc7191b-d494-450e-ae1f-2f74c932bfae/artwork-440x440.jpg"

const PlayerScreen = () => {
    const isLike = false
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.headerContainer}>
                <TouchableOpacity>
                    <AntDesign name={"arrowleft"} color={colors.iconPrimary} size={iconSize.md} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Playing Now</Text>
            </View>

            {/* Image */}
            <View style={styles.coverImageContainer}>
                <Image source={{ uri: imgUrl }} style={styles.coverImage} />
            </View>

            {/* Title and artist */}
            <View style={styles.titleRowHeartContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>jealous</Text>
                    <Text style={styles.artist}>The Trinity</Text>
                </View>

                <TouchableOpacity>
                    <AntDesign
                        name={isLike ? "heart" : "hearto"}
                        color={colors.iconSecondary}
                        size={iconSize.md} />
                </TouchableOpacity>
            </View>

            {/* player control */}
            <View style={styles.playerControlContainer}>
                <View style={styles.volumeWrapper}>
                    <TouchableOpacity>
                        <Feather name={true ? "volume-x" : "volume-1"} color={colors.iconSecondary} size={iconSize.lg} />
                    </TouchableOpacity>
                </View>
                <View style={styles.repeatShuffleWrapper}>
                    <PlayerRepeatToggle />
                    <PlayerShuffleToggle />
                </View>
            </View>

            {/* player progress bar */}
            <PlayerProgressBar />
        </View>
    )
}

export default PlayerScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        padding: spacing.lg
    },
    headerContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
    },
    headerText: {
        color: colors.textPrimary,
        fontSize: fontSize.lg,
        fontFamily: fontFamilies.medium,
        textAlign: "center",
        flex: 1
    },
    coverImageContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginVertical: spacing.xl
    },
    coverImage: {
        height: 300,
        width: 300,
        borderRadius: 10
    },
    title: {
        fontSize: fontSize.xl,
        color: colors.textPrimary,
        fontFamily: fontFamilies.medium
    },
    artist: {
        fontSize: fontSize.md,
        color: colors.textSecondary,
    },
    titleRowHeartContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    titleContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    playerControlContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: spacing.lg
    },
    volumeWrapper: {
        flex: 1
    },
    repeatShuffleWrapper: {
        flexDirection: "row",
        gap: spacing.md
    }
})