import { View, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { colors } from '../constants/color';
import Header from '../components/Header';
import SongCartWithCaterory from '../components/SongCartWithCaterory';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Header />
            <FlatList data={[1, 2, 3, 4, 5]} renderItem={SongCartWithCaterory} />
        </View>
    );
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
})