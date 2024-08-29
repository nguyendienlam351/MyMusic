import { nCSSongs, newReleaseSongs, recommendedSongs } from "./songs";

export const songsWithCategory = [
    {
        title: "Recommended For You",
        songs: recommendedSongs
    },
    {
        title: "New Release",
        songs: newReleaseSongs
    },
    {
        title: "NCS Songs",
        songs: nCSSongs
    },
]

//database: supabase.com
//password: A63ey#H5W9TdFru