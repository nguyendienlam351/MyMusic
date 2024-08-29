import { StyleSheet, Text, View } from 'react-native'
import React, { useMemo } from 'react'
import { fontFamilies } from '../constants/fonts'
import { fontSize, iconSize, spacing } from '../constants/dimensions'
import { Slider } from 'react-native-awesome-slider'
import { useSharedValue } from 'react-native-reanimated'
import { GotoNextButton, GotoPreviousButton, PlayPauseButton } from './PlayerControl'
import TrackPlayer, { useProgress } from 'react-native-track-player'
import { formatSecondsToMinutes } from '../utils';
import { useTheme } from '@react-navigation/native'

const PlayerProgressBar = () => {
    const { colors } = useTheme();
    const styles = useMemo(() => createStyles(colors), [colors]);
    const { duration, position } = useProgress();

    const progress = useSharedValue(0);
    const min = useSharedValue(0);
    const max = useSharedValue(1);
    const isSliding = useSharedValue(false);

    if (!isSliding.value) {
        progress.value = duration > 0 ? position / duration : 0;
    }

    const trackElapsedTime = formatSecondsToMinutes(position);
    const trackRemainingtime = formatSecondsToMinutes(duration - position);

    return (
        <View>
            <View style={styles.timeRow}>
                <Text style={styles.timeText}>
                    {trackElapsedTime}
                </Text>
                <Text style={styles.timeText}>
                    {"-"}{trackRemainingtime}</Text>
            </View>
            <Slider
                progress={progress}
                minimumValue={min}
                maximumValue={max}
                theme={{
                    maximumTrackTintColor: colors.maximumTintColor,
                    minimumTrackTintColor: colors.minimumTintColor
                }}
                renderBubble={() => null}
                containerStyle={{
                    height: 7,
                    borderRadius: spacing.sm
                }}
                thumbWidth={18}
                style={styles.sliderContainer}
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
            <View style={styles.playerPauseContainer}>
                <GotoPreviousButton size={iconSize.xl} color={colors.iconPrimary} />
                <PlayPauseButton size={iconSize.xl} color={colors.iconPrimary} />
                <GotoNextButton size={iconSize.xl} color={colors.iconPrimary} />
            </View>
        </View>
    )
}

export default PlayerProgressBar

const createStyles = (colors) => StyleSheet.create({
    timeRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: spacing.xl
    },
    timeText: {
        color: colors.textPrimary,
        fontFamily: fontFamilies.regular,
        fontSize: fontSize.md,
        opacity: 0.75
    },
    sliderContainer: {
        marginVertical: spacing.xl
    },
    playerPauseContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: spacing.xl,
        marginTop: spacing.xl
    }
})