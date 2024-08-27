import { NavigationContainer } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import TrackPlayer from 'react-native-track-player';
import { useSetupPlayer } from './src/hooks/useSetupTrackPlayer';


const App = () => {

  //track setup player
  const onLoad = () => {
    console.log("track player setup...");
  }

  useSetupPlayer({ onLoad });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

export default App
