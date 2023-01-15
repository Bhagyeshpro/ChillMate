// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DownloadingScreen from './screens/DownloadingScreen';
import MainScreen from './screens/MainScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='ChilMate'>
        <Stack.Screen
          name="ChillMate"
          // screenOptions={{
          //   headerShown: false
          // }}
          options={{ headerShown: false }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Main"
          // screenOptions={{
          //   headerShown: false
          // }}
          options={{ headerShown: false }}
          component={MainScreen}
        />
        <Stack.Screen name="Donwloading" component={DownloadingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;