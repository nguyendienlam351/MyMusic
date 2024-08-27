import { TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import { iconSize } from '../constants/dimensions'
import { colors } from '../constants/color'
import TrackPlayer, { useIsPlaying } from 'react-native-track-player'

export const GotoPreviousButton = ({ size = iconSize.lg }) => {
    const handleGotoPrevious = () => {
        TrackPlayer.skipToPrevious();
    }
    return (
        <TouchableOpacity onPress={handleGotoPrevious} activeOpacity={0.85}>
            <FontAwesome6 name={"backward"} size={size} color={colors.iconPrimary} />
        </TouchableOpacity>
    )
}

export const PlayPauseButton = ({ size = iconSize.lg }) => {
    const { playing } = useIsPlaying();
    const handleTogglePlay = () => {
        if (playing) {
            TrackPlayer.pause();
        } else {
            TrackPlayer.play();
        }
    }

    return (
        <TouchableOpacity onPress={handleTogglePlay} activeOpacity={0.85}>
            <FontAwesome6 name={playing ? "pause" : "play"} size={size} color={colors.iconPrimary} />
        </TouchableOpacity>
    )
}

export const GotoNextButton = ({ size = iconSize.lg }) => {
    const handleGotoNext = () => {
        TrackPlayer.skipToNext();
    }
    return (
        <TouchableOpacity onPress={handleGotoNext} activeOpacity={0.85}>
            <FontAwesome6 name={"forward"} size={size} color={colors.iconPrimary} />
        </TouchableOpacity>
    )
}