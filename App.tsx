import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { MyNavigation } from './components/MyNavigation';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';

export const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MyNavigation></MyNavigation>
    </NavigationContainer>
  );
}


