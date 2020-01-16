import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import {
  defaultNavigationOptions,
  bookListNavigationOptions,
  settingsNavigationOptions,
  childTabsNavigationOptions,
  tabBarOptions,
  noHeaderNavigationOptions,
} from './src/config/navigationOptions';
import BookList from './src/app/screens/BookList';
import BookDetail from './src/app/screens/BookDetail';
import SettingsScreen from './src/app/screens/Settings';
import LoginScreen from './src/app/screens/Login';

const MainNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: noHeaderNavigationOptions,
    },
    Home: {
      screen: createBottomTabNavigator(
        {
          Home: {
            screen: BookList,
            navigationOptions: bookListNavigationOptions,
          },
          Settings: {
            screen: SettingsScreen,
            navigationOptions: settingsNavigationOptions,
          },
        },
        {
          tabBarOptions: tabBarOptions,
        },
      ),
      navigationOptions: childTabsNavigationOptions,
    },
    Details: {screen: BookDetail},
  },
  {
    initialRouteName: 'Home',

    defaultNavigationOptions: defaultNavigationOptions,
  },
);

const App = createAppContainer(MainNavigator);

export default App;
