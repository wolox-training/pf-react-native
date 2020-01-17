import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { defaultNavigationOptions, bookListNavigationOptions, settingsNavigationOptions, tabBarOptions } from './src/config/navigationOptions'
import BookList from './src/app/screens/BookList';
import BookDetail from './src/app/screens/BookDetail';
import SettingsScreen from './src/app/screens/Settings';
import LoginScreen from './src/app/screens/Login';
import { ROUTES } from './src/constants/routes';

if(__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

const MainNavigator = createStackNavigator({
  Login: { screen: LoginScreen },
  [ROUTES.BookList]: { screen: createBottomTabNavigator(
    {
      [ROUTES.BookList]: { 
        screen: BookList,
        navigationOptions: bookListNavigationOptions(ROUTES.Library, ROUTES.Search)
      },
      [ROUTES.Settings]: {
        screen: SettingsScreen,
        navigationOptions: settingsNavigationOptions
      },
    },
    {
      tabBarOptions: tabBarOptions
    }
  )},
  [ROUTES.BookDetail]: { screen: BookDetail },
},
{
  initialRouteName: ROUTES.BookList,

  defaultNavigationOptions
});

const App = createAppContainer(MainNavigator);

export default App;
// import App from './src/app';

// if(__DEV__) {
//   import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
// }

// export default function index() {
//   return (
//     <App />
//   );
// }
