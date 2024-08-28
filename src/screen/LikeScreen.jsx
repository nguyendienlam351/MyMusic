import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useMemo } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { fontSize, iconSize, spacing } from '../constants/dimensions'
import { fontFamilies } from '../constants/fonts'
import SongCart from '../components/SongCart'
import useLikeSongs from '../store/likeStore'
import { useNavigation, useTheme } from '@react-navigation/native'
import FloatingPlayer from '../components/FloatingPlayer'
import TrackPlayer from 'react-native-track-player'

const LikeScreen = () => {
    const { colors } = useTheme();
    const styles = useMemo(() => createStyles(colors), [colors]);
    const navigation = useNavigation();
    const { likedSongs } = useLikeSongs();

    const handleGoBack = () => {
        navigation.goBack();
    }

    const handlePlayTrack = async (selectedTrack, songs = likedSongs) => {
        const trackIndex = songs.findIndex((track) => track.url === selectedTrack.url)

        if (trackIndex === -1) {
            return;
        }
        const beforeTracks = songs.slice(0, trackIndex)

        const afterTracks = songs.slice(trackIndex + 1)

        await TrackPlayer.reset();
        await TrackPlayer.add(selectedTrack);
        await TrackPlayer.add(afterTracks);
        await TrackPlayer.add(beforeTracks);

        await TrackPlayer.play();
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={handleGoBack}>
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
                data={likedSongs}
                renderItem={({ item }) =>
                    <SongCart
                        containerStyle={{ width: "47%" }}
                        imageStyle={{ height: 160, width: 160 }}
                        item={item}
                        handlePlay={(selectedTrack) => {
                            handlePlayTrack(selectedTrack)
                        }} />}
                numColumns={2}
                contentContainerStyle={{
                    paddingBottom: 500,
                    paddingHorizontal: spacing.lg
                }}
                columnWrapperStyle={{
                    justifyContent: "space-between",
                    marginVertical: spacing.lg
                }} />
            <FloatingPlayer />
        </View>
    )
}

export default LikeScreen

const createStyles = (colors) => StyleSheet.create({
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