import { useEffect, useRef } from "react";
import TrackPlayer, { Capability, RatingType, RepeatMode } from "react-native-track-player";

const setupPlayer = async () => {
    await TrackPlayer.setupPlayer({
        maxCacheSize: 1024 * 10
    });

    await TrackPlayer.updateOptions({
        ratingType: RatingType.Heart,
        capabilities: [
            Capability.Play,
            Capability.Pause,
            Capability.SkipToNext,
            Capability.SkipToPrevious,
            Capability.SeekTo
        ],
        compactCapabilities: [
            Capability.Play,
            Capability.Pause,
            Capability.SkipToNext,
            Capability.SkipToPrevious,
            Capability.SeekTo
        ],
    });
    await TrackPlayer.setVolume(0.5);
    await TrackPlayer.setRepeatMode(RepeatMode.Queue)
}

export const useSetupPlayer = ({ onLoad }) => {
    const isInittialized = useRef(false);

    useEffect(() => {
        setupPlayer().then(() => {
            isInittialized.current = true;
            onLoad();
        }).catch((error) => {
            isInittialized.current = false;
            console.log("error", error);
        });
    }, [])
}