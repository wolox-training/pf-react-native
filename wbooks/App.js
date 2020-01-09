import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View, Text, StatusBar, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import BookListActiveIcon from './src/assets/ic_library_active.png';
import BookListIcon from './src/assets/ic_library.png';
import SettingsActiveIcon from './src/assets/ic_settings_active.png';
import SettingsIcon from './src/assets/ic_settings.png';
import BookList from './src/app/screens/BookList';
import BookDetail from './src/app/screens/BookDetail';
import SettingsScreen from './src/app/screens/Settings';
import CustomHeader from './src/app/components/Header';
import TabBarIcon from './src/app/components/TabBar/components/TabBarIcon';

const MainNavigator = createStackNavigator({
  Home: { screen: createBottomTabNavigator(
    {
      Home: { 
        screen: BookList,
        navigationOptions: {
          tabBarLabel: null,
          tabBarIcon: ({focused}) => <TabBarIcon activeIcon={BookListActiveIcon} inactiveIcon={BookListIcon} label={'Library'} focused={focused}/>
        } 
      },
      Settings: {
        screen: SettingsScreen,
        navigationOptions: {
          tabBarLabel: null,
          tabBarIcon: ({focused}) => <TabBarIcon activeIcon={SettingsActiveIcon} inactiveIcon={SettingsIcon} label={'Settings'} focused={focused}/>
        }
      },
    },
    {
      tabBarOptions: {
        showLabel: false
      },
    }
  )},
  Details: { screen: BookDetail },
},
{
  initialRouteName: 'Home',

  defaultNavigationOptions: {
    header: 
      <CustomHeader/>
  },
});

const App = createAppContainer(MainNavigator);

export default App;
