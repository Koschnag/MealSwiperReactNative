import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from '../pages/HomeScreen';
import { ProfileScreen } from "../pages/ProfileScreen";
import { Stack } from '../App';
import { CreateRecipeScreen } from '../pages/CreateRecipeScreen';

export const MyNavigation = () =>
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Welcome' }} />
    <Stack.Screen name="Profile" component={ProfileScreen} />
    <Stack.Screen name="CreateRecipe" component={CreateRecipeScreen} />
  </Stack.Navigator>
;
