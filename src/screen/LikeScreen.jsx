import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/color'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { fontSize, iconSize, spacing } from '../constants/dimensions'
import { fontFamilies } from '../constants/fonts'
import SongCart from '../components/SongCart'

const LikeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity>
                    <AntDesign name={"arrowleft"} color={colors.iconPrimary} size={iconSize.md} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <SimpleLineIcons name={"equalizer"} color={colors.iconPrimary} size={iconSize.md} />
                </TouchableOpacity>
            </View>
            <FlatList
                ListHeaderComponent={
                    <Text style={styles.headingText}>Liked Songs</Text>
                }
                data={[1, 2, 3, 4, 5, 6, 7, 8]}
                renderItem={() =>
                    <SongCart
                        containerStyle={{ width: "47%" }}
                        imageStyle={{ height: 160, width: 160 }} />}
                numColumns={2}
                contentContainerStyle={{
                    paddingBottom: 500,
                    paddingHorizontal: spacing.lg
                }}
                columnWrapperStyle={{
                    justifyContent: "space-between",
                    marginVertical: spacing.lg
                }} />
        </View>
    )
}

export default LikeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: spacing.md
    },
    headingText: {
        color: colors.textPrimary,
        fontSize: fontSize.xl,
        fontFamily: fontFamilies.bold,
    }
})