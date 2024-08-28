import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useMemo } from 'react'
import { fontSize, iconSize, spacing } from '../constants/dimensions'
import { fontFamilies } from '../constants/fonts'
import { GotoNextButton, GotoPreviousButton, PlayPauseButton } from './PlayerControl'
import { useSharedValue } from 'react-native-reanimated'
import { Slider } from 'react-native-awesome-slider'
import MovingText from './MovingText'
import { useNavigation, useTheme } from '@react-navigation/native'
import TrackPlayer, { useActiveTrack, useProgress } from 'react-native-track-player'


const FloatingPlayer = () => {
    const { colors } = useTheme();
    const styles = useMemo(() => createStyles(colors), [colors]);
    const activeTrack = useActiveTrack();
    const navigation = useNavigation();
    const { duration, position } = useProgress();

    const progress = useSharedValue(0);
    const min = useSharedValue(0);
    const max = useSharedValue(1);
    const isSliding = useSharedValue(false);

    if (!isSliding.value) {
        progress.value = duration > 0 ? position / duration : 0;
    }

    handleOpenPlayerScreen = () => {
        navigation.navigate("PLAYER_SCREEN")
    }

    if (!activeTrack) {
        return null
    }

    return (
        <View >
            <View style={{ zIndex: 1 }}>
                <Slider
                    progress={progress}
                    minimumValue={min}
                    maximumValue={max}
                    theme={{
                        maximumTrackTintColor: colors.maximumTintColor,
                        minimumTrackTintColor: colors.minimumTintColor
                    }}
                    renderBubble={() => null}
                    onSlidingStart={() => isSliding.value = true}
                    onValueChange={async (value) => {
                        await TrackPlayer.seekTo(value * duration)
                    }}
                    onSlidingComplete={async (value) => {
                        if (!isSliding.value) {
                            return;
                        }
                        isSliding.value = false;
                        await TrackPlayer.seekTo(value * duration)
                    }}
                />
            </View>
            <TouchableOpacity
                style={styles.container}
                activeOpacity={0.85}
                onPress={handleOpenPlayerScreen}>
                <Image source={{ uri: activeTrack?.artwork }} style={styles.coverImage} />
                <View style={styles.titleContainer}>
                    <MovingText
                        text={activeTrack?.title}
                        style={styles.title}
                        animationThreshold={20} />
                    {/* <Text style={styles.title}>Follow Back</Text> */}
                    <Text style={styles.artist}>{activeTrack?.artist}</Text>
                </View>
                <View style={styles.playerControlContainer}>
                    <GotoPreviousButton size={iconSize.md} color={colors.iconPrimary} />
                    <PlayPauseButton size={iconSize.lg} color={colors.iconPrimary} />
                    <GotoNextButton size={iconSize.md} color={colors.iconPrimary} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default FloatingPlayer

const createStyles = (colors) => StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
    },
    coverImage: {
        height: 60,
        width: 60,
        resizeMode: "cover"
    },
    titleContainer: {
        flex: 1,
        paddingHorizontal: spacing.sm,
        overflow: "hidden",
        marginLeft: spacing.sm,
        marginRight: spacing.lg
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