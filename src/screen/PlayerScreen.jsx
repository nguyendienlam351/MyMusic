import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from '../constants/color'
import { fontSize, iconSize, spacing } from '../constants/dimensions'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import { fontFamilies } from '../constants/fonts'
import PlayerRepeatToggle from '../components/PlayerRepeatToggle'
import PlayerShuffleToggle from '../components/PlayerShuffleToggle'
import PlayerProgressBar from '../components/PlayerProgressBar'
import TrackPlayer, { useActiveTrack } from 'react-native-track-player'
import { useNavigation } from '@react-navigation/native'
import useLikeSongs from '../store/likeStore'
import { isExist } from '../utils'

const imgUrl = "https://linkstorage.linkfire.com/medialinks/images/4bc7191b-d494-450e-ae1f-2f74c932bfae/artwork-440x440.jpg"

const PlayerScreen = () => {
    const { likedSongs, addToLiked } = useLikeSongs();
    const navigation = useNavigation();
    const activeTrack = useActiveTrack();
    const [isMute, setIsMute] = useState(false);

    useEffect(() => {
        setVolume();
    }, [])

    const setVolume = async () => {
        const volume = await TrackPlayer.getVolume();
        setIsMute(volume === 0 ? true : false);
    }

    const isLike = false

    const handleGoBack = () => {
        navigation.goBack();
    }

    const handleToggleVolume = () => {
        TrackPlayer.setVolume(isMute ? 1 : 0);
        setIsMute(!isMute);
    }

    if (!activeTrack) {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: colors.background
                }}>
                <ActivityIndicator size={"large"} color={colors.iconPrimary} />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={handleGoBack}>
                    <AntDesign name={"arrowleft"} color={colors.iconPrimary} size={iconSize.md} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Playing Now</Text>
            </View>

            {/* Image */}
            <View style={styles.coverImageContainer}>
                <Image source={{ uri: activeTrack?.artwork }} style={styles.coverImage} />
            </View>

            {/* Title and artist */}
            <View style={styles.titleRowHeartContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{activeTrack?.title}</Text>
                    <Text style={styles.artist}>{activeTrack?.artist}</Text>
                </View>

                <TouchableOpacity onPress={() => addToLiked(activeTrack)}>
                    <AntDesign
                        name={isExist(likedSongs, activeTrack) ? "heart" : "hearto"}
                        color={colors.iconSecondary}
                        size={iconSize.md} />
                </TouchableOpacity>
            </View>

            {/* player control */}
            <View style={styles.playerControlContainer}>
                <View style={styles.volumeWrapper}>
                    <TouchableOpacity onPress={handleToggleVolume}>
                        <Feather name={isMute ? "volume-x" : "volume-1"} color={colors.iconSecondary} size={iconSize.lg} />
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