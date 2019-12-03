import React from 'react';
import { createAppContainer } from 'react-navigation'
import { StyleSheet, Text, View, Easing, Animated } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import TabBarComponent from './components/TabBar'
import firebase from 'firebase';

import firebaseConfig from './config/firebase';
import Recent from './screens/Recent';
import Search from './screens/Search';

if(!firebase.apps.length)
  firebase.initializeApp(firebaseConfig);

const MainNavigator = createBottomTabNavigator({
  Najnowsze: {screen: Recent},
  Wyszukaj: {screen: Search}
}, {tabBarComponent: TabBarComponent})

const App = createAppContainer(MainNavigator)

export default App
