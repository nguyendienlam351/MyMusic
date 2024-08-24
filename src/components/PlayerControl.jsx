import { TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import { iconSize } from '../constants/dimensions'
import { colors } from '../constants/color'

export const GotoPreviousButton = ({ size = iconSize.lg }) => {
    return (
        <TouchableOpacity activeOpacity={0.85}>
            <FontAwesome6 name={"backward"} size={size} color={colors.iconPrimary} />
        </TouchableOpacity>
    )
}

export const PlayPauseButton = ({ size = iconSize.lg }) => {
    const isPlaying = true;
    return (
        <TouchableOpacity activeOpacity={0.85}>
            <FontAwesome6 name={isPlaying ? "pause" : "play"} size={size} color={colors.iconPrimary} />
        </TouchableOpacity>
    )
}

export const GotoNextButton = ({ size = iconSize.lg }) => {
    return (
        <TouchableOpacity activeOpacity={0.85}>
            <FontAwesome6 name={"forward"} size={size} color={colors.iconPrimary} />
        </TouchableOpacity>
    )
}