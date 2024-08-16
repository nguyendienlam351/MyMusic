import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { colors } from '../constants/color';
import Header from '../components/Header';
import { fontFamilies } from '../constants/fonts';
import { fontSize } from '../constants/dimensions';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Header />
            <Text style={styles.headerText}>Recommended for you</Text>
        </View>
    );
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    headerText: {
        color: colors.textPrimary,
        fontSize: fontSize.md,
        fontFamily: fontFamilies.bold
    }
})