import { Text } from 'react-native';
import * as React from 'react';

export const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};
