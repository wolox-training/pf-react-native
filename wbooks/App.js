import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import * as NavigationOptions from './src/config/navigationOptions'
import BookList from './src/app/screens/BookList';
import BookDetail from './src/app/screens/BookDetail';
import SettingsScreen from './src/app/screens/Settings';
import LoginScreen from './src/app/screens/Login';
import { ROUTES } from './src/constants/routes';

if(__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

const MainNavigator = createStackNavigator({
  [ROUTES.Login]: { 
    screen: LoginScreen,
    navigationOptions: NavigationOptions.noHeaderNavigationOptions
  },
  [ROUTES.BookList]: { screen: createBottomTabNavigator(
    {
      [ROUTES.BookList]: { 
        screen: BookList,
        navigationOptions: NavigationOptions.bookListNavigationOptions
      },
      [ROUTES.Settings]: {
        screen: SettingsScreen,
        navigationOptions: NavigationOptions.settingsNavigationOptions
      },
    },
    {
      tabBarOptions: NavigationOptions.tabBarOptions,
      navigationOptions: NavigationOptions.childTabsNavigationOptions
    },
  )},
  [ROUTES.BookDetail]: { 
    screen: BookDetail,
    navigationOptions: NavigationOptions.bookDetailNavigationOptions
  },
},
{
  initialRouteName: ROUTES.Login,
  defaultNavigationOptions: NavigationOptions.defaultNavigationOptions
});

const App = createAppContainer(MainNavigator);

export default App;
