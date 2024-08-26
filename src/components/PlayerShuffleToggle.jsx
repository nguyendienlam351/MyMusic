import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { colors } from '../constants/color'
import { iconSize } from '../constants/dimensions'

const PlayerShuffleToggle = () => {
    return (
        <TouchableOpacity>
            <MaterialCommunityIcons
                name={"shuffle"}
                color={colors.iconSecondary}
                size={iconSize.lg} />
        </TouchableOpacity>
    )
}

export default PlayerShuffleToggle

const styles = StyleSheet.create({})