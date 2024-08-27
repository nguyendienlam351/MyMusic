import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { colors } from '../constants/color'
import { fontSize, iconSize, spacing } from '../constants/dimensions'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Octicons from 'react-native-vector-icons/Octicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { fontFamilies } from '../constants/fonts'

const CustomDrawerContent = (props) => {
    const isDarkMode = false;

    const toggleDrawer = () => {
        props.navigation.toggleDrawer();
    }
    return (
        <DrawerContentScrollView style={styles.container}>
            {/* header icon */}
            <View style={styles.headerIconContainer}>
                <TouchableOpacity
                    onPress={toggleDrawer}>
                    <AntDesign
                        name={"close"}
                        color={colors.iconPrimary}
                        size={iconSize.lg} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Octicons
                        name={isDarkMode ? "sun" : "moon"}
                        color={colors.iconPrimary}
                        size={iconSize.lg} />
                </TouchableOpacity>
            </View>
            {/* menu item */}
            <View style={styles.drawerItemContainer}>
                <DrawerItem
                    label={"Profile"}
                    labelStyle={styles.labelStyle}
                    icon={() =>
                        <FontAwesome
                            name={"user"}
                            color={colors.iconSecondary}
                            size={iconSize.md} />
                    }
                    style={styles.drawerItem} />

                <DrawerItem
                    label={"Liked Songs"}
                    labelStyle={styles.labelStyle}
                    icon={() =>
                        <AntDesign
                            name={"hearto"}
                            color={colors.iconSecondary}
                            size={iconSize.md} />
                    }
                    style={styles.drawerItem}
                    onPress={() => {
                        props.navigation.navigate("LIKE_SCREEN")
                    }} />

                <DrawerItem
                    label={"Language"}
                    labelStyle={styles.labelStyle}
                    icon={() =>
                        <FontAwesome
                            name={"language"}
                            color={colors.iconSecondary}
                            size={iconSize.md} />
                    }
                    style={styles.drawerItem} />

                <DrawerItem
                    label={"Contact us"}
                    labelStyle={styles.labelStyle}
                    icon={() =>
                        <FontAwesome
                            name={"envelope-o"}
                            color={colors.iconSecondary}
                            size={iconSize.md} />
                    }
                    style={styles.drawerItem} />

                <DrawerItem
                    label={"FAQs"}
                    labelStyle={styles.labelStyle}
                    icon={() =>
                        <FontAwesome
                            name={"question-circle-o"}
                            color={colors.iconSecondary}
                            size={iconSize.md} />
                    }
                    style={styles.drawerItem} />

                <DrawerItem
                    label={"Settings"}
                    labelStyle={styles.labelStyle}
                    icon={() =>
                        <FontAwesome
                            name={"cog"}
                            color={colors.iconSecondary}
                            size={iconSize.md} />
                    }
                    style={styles.drawerItem} />
            </View>
        </DrawerContentScrollView>
    )
}

export default CustomDrawerContent

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        padding: spacing.lg
    },
    headerIconContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    drawerItemContainer: {
        marginVertical: spacing.xl
    },
    labelStyle: {
        fontSize: fontSize.md,
        color: colors.textPrimary,
        fontFamily: fontFamilies.medium
    },
    drawerItem: {
        marginVertical: spacing.sm
    }
})