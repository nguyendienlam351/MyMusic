import { View, StyleSheet, FlatList } from 'react-native'
import React, { useMemo } from 'react'
import Header from '../components/Header';
import SongCartWithCaterory from '../components/SongCartWithCaterory';
import FloatingPlayer from '../components/FloatingPlayer';
import { songsWithCategory } from '../data/songsWithCategory';
import { useTheme } from '@react-navigation/native';

const HomeScreen = () => {
    const { colors } = useTheme();
    const styles = useMemo(() => createStyles(colors), [colors]);

    return (
        <View style={styles.container}>
            <Header />
            <FlatList
                data={songsWithCategory}
                renderItem={({ item }) => <SongCartWithCaterory item={item} />}
                contentContainerStyle={{
                    paddingBottom: 100
                }} />
            <FloatingPlayer />
        </View>
    );
}

export default HomeScreen

const createStyles = (colors) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
})