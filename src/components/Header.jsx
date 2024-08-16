import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { colors } from '../constants/color'
import { iconSize, spacing } from '../constants/dimensions'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'

const Header = () => {
    return (
        <View style={styles.header}>
            <TouchableOpacity>
                <FontAwesome5 name="grip-lines" color={colors.textPrimary} size={iconSize.md} />
            </TouchableOpacity>
            <TouchableOpacity>
                <AntDesign name="search1" color={colors.textPrimary} size={iconSize.md} />
            </TouchableOpacity>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: spacing.sm,
        paddingHorizontal: spacing.lg
    }
})