import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { colors } from '../constants/color'
import { iconSize } from '../constants/dimensions'
import { useTrackPlayerRepeatMode } from '../hooks/useTrackPlayerRepeatMode'
import { RepeatMode } from 'react-native-track-player'

const repeatOrder = [RepeatMode.Off, RepeatMode.Track, RepeatMode.Queue]

const PlayerRepeatToggle = () => {
    const { repeatMode, changeRepeatMode } = useTrackPlayerRepeatMode();

    const toggleRepeatMode = () => {
        if (repeatMode == null) {
            return;
        }
        const currentIndex = repeatOrder.indexOf(repeatMode);
        const nextIndex = (currentIndex + 1) % repeatOrder.length;
        changeRepeatMode(nextIndex);
    }

    let iconName = "repeat"

    switch (repeatMode) {
        case RepeatMode.Off:
            iconName = "repeat-off";
            break;
        case RepeatMode.Track:
            iconName = "repeat-once";
            break;
        case RepeatMode.Queue:
            iconName = "repeat";
            break;
    }


    return (
        <TouchableOpacity onPress={toggleRepeatMode}>
            <MaterialCommunityIcons
                name={iconName}
                color={colors.iconSecondary}
                size={iconSize.lg} />
        </TouchableOpacity>
    )
}

export default PlayerRepeatToggle

const styles = StyleSheet.create({})