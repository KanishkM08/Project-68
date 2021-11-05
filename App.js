import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import fb from './Screens/fb';
import insta from './Screens/insta';

export default function App() {
  return (
      <appContainer />
  );
}

const tabNav = createBottomTabNavigator({
  Transaction: {Screen: fb},
  Search: {Screen: insta}
})
const appContainer = createAppContainer(tabNav)