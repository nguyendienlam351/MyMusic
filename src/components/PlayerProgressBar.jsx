import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/color'
import { fontFamilies } from '../constants/fonts'
import { fontSize, iconSize, spacing } from '../constants/dimensions'
import { Slider } from 'react-native-awesome-slider'
import { useSharedValue } from 'react-native-reanimated'
import { GotoNextButton, GotoPreviousButton, PlayPauseButton } from './PlayerControl'

const PlayerProgressBar = () => {
    const progress = useSharedValue(0.25);
    const min = useSharedValue(0);
    const max = useSharedValue(1);
    return (
        <View>
            <View style={styles.timeRow}>
                <Text style={styles.timeText}>00:50</Text>
                <Text style={styles.timeText}>{"-"}04:00</Text>
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
            />
            <View style={styles.playerPauseContainer}>
                <GotoPreviousButton size={iconSize.xl} />
                <PlayPauseButton size={iconSize.xl} />
                <GotoNextButton size={iconSize.xl} />
            </View>
        </View>
    )
}

export default PlayerProgressBar

const styles = StyleSheet.create({
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