import { create } from "zustand";
import { isExist } from "../utils";
import AsyncStorage from "@react-native-async-storage/async-storage";

//hooks, store
const useLikeSongs = create((set) => ({
    likedSongs: [],
    addToLiked: async (newSong) => {
        set((state) => {
            //check song is exists
            let isAlreadyExist = isExist(state.likedSongs, newSong);

            const updatesSongs = isAlreadyExist
                ? state.likedSongs.filter((item) => item.url !== newSong.url)
                : [newSong, ...state.likedSongs];

            AsyncStorage.setItem('likedSongs', JSON.stringify(updatesSongs));
            return {
                likedSongs: updatesSongs
            }
        })
    },
    loadLikeSong: async () => {
        try {
            const likedSongs = await AsyncStorage.getItem('likedSongs');
            if (likedSongs) {
                set({ likedSongs: JSON.parse(likedSongs) });
            }
            return true
        } catch (error) { }
    },
}));

export default useLikeSongs