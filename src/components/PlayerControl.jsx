import { TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import { iconSize } from '../constants/dimensions'
import { colors } from '../constants/color'

export const GotoPreviousButton = ({ size = iconSize.lg }) => {
    return (
        <TouchableOpacity>
            <FontAwesome6 name={"backward"} size={size} color={colors.iconPrimary} />
        </TouchableOpacity>
    )
}

export const PlayPauseButton = ({ size = iconSize.lg }) => {
    return (
        <TouchableOpacity>
            <FontAwesome6 name={true ? "pause" : "play"} size={size} color={colors.iconPrimary} />
        </TouchableOpacity>
    )
}

export const GotoNextButton = ({ size = iconSize.lg }) => {
    return (
        <TouchableOpacity>
            <FontAwesome6 name={"forward"} size={size} color={colors.iconPrimary} />
        </TouchableOpacity>
    )
}