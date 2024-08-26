import { View, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { colors } from '../constants/color';
import Header from '../components/Header';
import SongCartWithCaterory from '../components/SongCartWithCaterory';
import FloatingPlayer from '../components/FloatingPlayer';
import { songsWithCategory } from '../data/songsWithCategory';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Header />
            <FlatList
                data={songsWithCategory}
                renderItem={SongCartWithCaterory}
                contentContainerStyle={{
                    paddingBottom: 100
                }} />
            <FloatingPlayer />
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