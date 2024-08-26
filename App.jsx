import { NavigationContainer } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import TrackPlayer from 'react-native-track-player';


const App = () => {
  useEffect(() => {
    setupPlayer();
  }, [])

  const setupPlayer = async () => {
    await TrackPlayer.setupPlayer();
    console.log("track player setup success");
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

export default App
