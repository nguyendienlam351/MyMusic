import { TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { iconSize } from '../constants/dimensions'
import TrackPlayer from 'react-native-track-player'
import { useTheme } from '@react-navigation/native'

const PlayerShuffleToggle = () => {
    const { colors } = useTheme();
    const shuffleSongs = async () => {
        let queue = await TrackPlayer.getQueue();
        await TrackPlayer.reset();
        queue.sort(() => Math.random() - 0.5);
        await TrackPlayer.add(queue);
        await TrackPlayer.play();
    }
    return (
        <TouchableOpacity onPress={shuffleSongs}>
            <MaterialCommunityIcons
                name={"shuffle"}
                color={colors.iconSecondary}
                size={iconSize.lg} />
        </TouchableOpacity>
    )
}

export default PlayerShuffleToggle