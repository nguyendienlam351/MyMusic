import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SongCart from './SongCart'
import { fontSize, spacing } from '../constants/dimensions'
import { colors } from '../constants/color'
import { fontFamilies } from '../constants/fonts'
import TrackPlayer from 'react-native-track-player'

const SongCartWithCaterory = ({ item }) => {

    const handlePlayTrack = async (selectedTrack, songs = item.songs) => {
        const trackIndex = songs.findIndex((track) => track.url === selectedTrack.url)

        if (trackIndex === -1) {
            return;
        }
        const beforeTracks = songs.slice(0, trackIndex)

        const afterTracks = songs.slice(trackIndex + 1)

        console.log("----", afterTracks.length)

        await TrackPlayer.reset();
        await TrackPlayer.add(selectedTrack);
        await TrackPlayer.add(afterTracks);
        await TrackPlayer.add(beforeTracks);

        // await TrackPlayer.play();
    }

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>{item.title}</Text>
            <FlatList
                data={item.songs}
                renderItem={({ item }) =>
                    <SongCart
                        item={item}
                        handlePlay={(selectedTrack) => {
                            handlePlayTrack(selectedTrack)
                        }} />
                }
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