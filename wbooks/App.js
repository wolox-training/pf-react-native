/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import BookListIcon from './src/assets/ic_library_active.png';
import SettingsIcon from './src/assets/ic_settings_active.png';
import BookList from './src/app/screens/BookList';
import BookDetail from './src/app/screens/BookDetail';
import CustomHeader from './src/app/components/Header';
import TabBarIcon from './src/app/components/TabBar/components/TabBarIcon';

class SettingsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

const MainNavigator = createStackNavigator({
  Home: { screen: createBottomTabNavigator(
    {
      Home: { 
        screen: BookList,
        navigationOptions: {
          tabBarLabel: null,
          tabBarIcon: () => <TabBarIcon imageIcon={BookListIcon} label={'Library'}/>
        } 
      },
      Settings: {
        screen: SettingsScreen,
        navigationOptions: {
          tabBarLabel: null,
          tabBarIcon: () => <TabBarIcon imageIcon={SettingsIcon} label={'Settings'}/>
        }
      },
    },
    {
      tabBarOptions: {
        showLabel: false,
        activeTintColor: 'red',
        inactiveTintColor: 'gray',
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
