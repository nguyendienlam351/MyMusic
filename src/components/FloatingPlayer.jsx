import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/color'
import { fontSize, iconSize, spacing } from '../constants/dimensions'
import { fontFamilies } from '../constants/fonts'
import { GotoNextButton, GotoPreviousButton, PlayPauseButton } from './PlayerControl'
import { useSharedValue } from 'react-native-reanimated'
import { Slider } from 'react-native-awesome-slider'
import MovingText from './MovingText'


const imgUrl = "https://linkstorage.linkfire.com/medialinks/images/2428851f-c910-4a82-953b-63cfa1a5134e/artwork-440x440.jpg"

const FloatingPlayer = () => {
    const progress = useSharedValue(0.2);
    const min = useSharedValue(0);
    const max = useSharedValue(1);
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
                />
            </View>
            <TouchableOpacity style={styles.container} activeOpacity={0.85}>
                <Image source={{ uri: imgUrl }} style={styles.coverImage} />
                <View style={styles.titleContainer}>
                    <MovingText
                        text={"Follow Back"}
                        style={styles.title}
                        animationThreshold={20} />
                    {/* <Text style={styles.title}>Follow Back</Text> */}
                    <Text style={styles.artist}>LXNGVX</Text>
                </View>
                <View style={styles.playerControlContainer}>
                    <GotoPreviousButton size={iconSize.md} />
                    <PlayPauseButton size={iconSize.lg} />
                    <GotoNextButton size={iconSize.md} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default FloatingPlayer

const styles = StyleSheet.create({
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