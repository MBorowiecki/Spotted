import React from 'react';
import { createAppContainer } from 'react-navigation'
import { StyleSheet, Text, View, Easing, Animated } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'

import MainScreen from './screens/MainScreen';

const MainNavigator = createStackNavigator({
  MainScreen: {screen: MainScreen}
}, {defaultNavigationOptions: {
  header: null
}})

const App = createAppContainer(MainNavigator)

export default App
