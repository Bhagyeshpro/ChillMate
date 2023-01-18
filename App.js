// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import WebScreen from './screens/WebScreen';
import DownloadingScreen from './screens/DownloadingScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name="Home"
          // screenOptions={{
          //   headerShown: false
          // }}
          options={{ headerShown: false }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Web"
          // screenOptions={{
          //   headerShown: false
          // }}
          options={{ headerShown: false }}
          component={WebScreen}
        />
        <Stack.Screen name="Donwloading" component={DownloadingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;