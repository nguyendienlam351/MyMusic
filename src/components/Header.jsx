import React, { useMemo } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { iconSize, spacing } from '../constants/dimensions'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation, useTheme } from '@react-navigation/native'

const Header = () => {
    const { colors } = useTheme();
    const styles = useMemo(() => createStyles(colors), [colors]);
    const navigation = useNavigation();

    const toggleDrawer = () => {
        navigation.toggleDrawer();
    }

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={toggleDrawer}>
                <FontAwesome5 name="grip-lines" color={colors.textPrimary} size={iconSize.md} />
            </TouchableOpacity>
            <TouchableOpacity>
                <AntDesign name="search1" color={colors.textPrimary} size={iconSize.md} />
            </TouchableOpacity>
        </View>
    )
}

export default Header

const createStyles = (colors) => StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: spacing.sm,
        paddingHorizontal: spacing.lg
    }
})