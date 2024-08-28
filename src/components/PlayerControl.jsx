import { TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import { iconSize } from '../constants/dimensions'
import TrackPlayer, { useIsPlaying } from 'react-native-track-player'

export const GotoPreviousButton = ({ size = iconSize.lg, color }) => {
    const handleGotoPrevious = () => {
        TrackPlayer.skipToPrevious();
    }
    return (
        <TouchableOpacity onPress={handleGotoPrevious} activeOpacity={0.85}>
            <FontAwesome6 name={"backward"} size={size} color={color} />
        </TouchableOpacity>
    )
}

export const PlayPauseButton = ({ size = iconSize.lg, color }) => {
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
            <FontAwesome6 name={playing ? "pause" : "play"} size={size} color={color} />
        </TouchableOpacity>
    )
}

export const GotoNextButton = ({ size = iconSize.lg, color }) => {
    const handleGotoNext = () => {
        TrackPlayer.skipToNext();
    }
    return (
        <TouchableOpacity onPress={handleGotoNext} activeOpacity={0.85}>
            <FontAwesome6 name={"forward"} size={size} color={color} />
        </TouchableOpacity>
    )
}