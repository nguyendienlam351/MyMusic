import { NavigationContainer } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import { useSetupPlayer } from './src/hooks/useSetupTrackPlayer';
import useLikeSongs from './src/store/likeStore';
import { darkTheme } from './src/theme/darkTheme';
import { lightTheme } from './src/theme/lightTheme';
import useThemeStore from './src/store/themeStore';
import { useColorScheme } from 'react-native';


const App = () => {
  const scheme = useColorScheme()
  const { isDarkTheme, toggleTheme } = useThemeStore();
  const { loadLikeSong } = useLikeSongs();

  useEffect(() => {
    loadLikeSong();
    scheme === "light" ? toggleTheme(false) : toggleTheme(true)
  }, [scheme])

  //track setup player
  const onLoad = () => {
    console.log("track player setup...");
  }

  useSetupPlayer({ onLoad });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer theme={isDarkTheme ? darkTheme : lightTheme}>
        <DrawerNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

export default App
