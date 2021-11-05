import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import FacebookScreen from './Screens/FacebookScreen';
import InstagramScreen from './Screens/InstagramScreen';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const tabNav = createBottomTabNavigator({
  Facebook: { screen: FacebookScreen },
  Instagram: { screen: InstagramScreen },
});

const AppContainer = createAppContainer(tabNav);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
