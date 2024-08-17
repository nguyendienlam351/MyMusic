import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SongCart from './SongCart'
import { fontSize, spacing } from '../constants/dimensions'
import { colors } from '../constants/color'
import { fontFamilies } from '../constants/fonts'

const SongCartWithCaterory = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Recommended for you</Text>
            <FlatList
                data={[1, 2, 3, 4, 5]}
                renderItem={SongCart}
                horizontal={true}
                ItemSeparatorComponent={
                    <View style={{ marginHorizontal: spacing.sm }} />
                }
                contentContainerStyle={{
                    paddingHorizontal: spacing.lg
                }} />
        </View>
    )
}

export default SongCartWithCaterory

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerText: {
        color: colors.textPrimary,
        fontSize: fontSize.xl,
        fontFamily: fontFamilies.bold,
        paddingVertical: spacing.lg,
        paddingHorizontal: spacing.lg
    }
})