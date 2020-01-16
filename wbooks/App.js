import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View, Text, StatusBar, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { defaultNavigationOptions, bookListNavigationOptions, settingsNavigationOptions, tabBarOptions } from './src/config/navigationOptions'
import BookListActiveIcon from './src/assets/ic_library_active.png';
import BookListIcon from './src/assets/ic_library.png';
import SettingsActiveIcon from './src/assets/ic_settings_active.png';
import SettingsIcon from './src/assets/ic_settings.png';
import BookList from './src/app/screens/BookList';
import BookDetail from './src/app/screens/BookDetail';
import SettingsScreen from './src/app/screens/Settings';
import CustomHeader from './src/app/components/Header';
import LoginLogout from './src/app/screens/Login';

const MainNavigator = createStackNavigator({
  Login: { screen: LoginLogout },
  Home: { screen: createBottomTabNavigator(
    {
      Home: { 
        screen: BookList,
        navigationOptions: bookListNavigationOptions
      },
      Settings: {
        screen: SettingsScreen,
        navigationOptions: settingsNavigationOptions
      },
    },
    {
      tabBarOptions: tabBarOptions
    }
  )},
  Details: { screen: BookDetail },
},
{
  initialRouteName: 'Login',

  defaultNavigationOptions: defaultNavigationOptions
});

const App = createAppContainer(MainNavigator);

export default App;
