import { Text } from 'react-native';
import * as React from 'react';
import { Button } from 'react-native';

export const HomeScreen = ({ navigation }) => {
  return (
    <><Button
      title="Go to recipes"
      onPress={() => navigation.navigate('Profile', { name: 'Jane' })} /><Button
        title="Create a recipe"
        onPress={() => navigation.navigate('Profile', { name: 'Jane' })} /></>
  );
};
export const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};
