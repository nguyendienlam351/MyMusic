import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { colors } from '../constants/color'
import { iconSize } from '../constants/dimensions'

const PlayerRepeatToggle = () => {
    return (
        <TouchableOpacity>
            <MaterialCommunityIcons
                name={"repeat"}
                color={colors.iconSecondary}
                size={iconSize.lg} />
        </TouchableOpacity>
    )
}

export default PlayerRepeatToggle

const styles = StyleSheet.create({})