/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';

import BookList from './src/app/screens/booklist';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import BookDetail from './src/app/screens/book-detail';

const MainNavigator = createStackNavigator({
  Home: {screen: BookList},
  Details: {screen: BookDetail},
},
{
  initialRouteName: 'Home',
});

const App = createAppContainer(MainNavigator);

export default App;

