import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Provider, connect } from 'react-redux';
import { createReduxContainer, createReactNavigationReduxMiddleware, createNavigationReducer } from 'react-navigation-redux-helpers';

import * as NavigationOptions from '../../src/config/navigationOptions'
import BookList from '../../src/app/screens/BookList';
import BookDetail from '../../src/app/screens/BookDetail';
import SettingsScreen from '../../src/app/screens/Settings';
import LoginScreen from '../../src/app/screens/Login';
import { ROUTES } from '../../src/constants/routes';
import configureStore from '../redux/store';

const BooksNavigator = createStackNavigator(
  {
    [ROUTES.BookList]: { 
      screen: BookList,
      navigationOptions: NavigationOptions.bookListNavigationOptions
    },
    [ROUTES.BookDetail]: { 
      screen: BookDetail,
      navigationOptions: NavigationOptions.bookDetailNavigationOptions
    }
  },
  {
    defaultNavigationOptions: NavigationOptions.defaultNavigationOptions
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    [ROUTES.BookList]: {
      screen: BooksNavigator,
      navigationOptions: NavigationOptions.bookListNavigationOptions
    },
    [ROUTES.Settings]: {
      screen: SettingsScreen,
      navigationOptions: NavigationOptions.settingsNavigationOptions
    }
  },
  {
    tabBarOptions: NavigationOptions.tabBarOptions,
    navigationOptions: NavigationOptions.childTabsNavigationOptions
  }
);

const SwitchNavigator = createSwitchNavigator(
  {
    [ROUTES.App]: TabNavigator,
    [ROUTES.Login]: { 
      screen: LoginScreen,
      navigationOptions: NavigationOptions.noHeaderNavigationOptions
    }
  },
  {
    initialRouteName: ROUTES.App
  }
)

const AppNavigator = createAppContainer(SwitchNavigator);

const navReducer = createNavigationReducer(AppNavigator);

const middlewareNav = createReactNavigationReduxMiddleware(state => state.nav);

const App = createReduxContainer(SwitchNavigator);
const mapStateToProps = state => ({
  state: state.nav
});
const AppWithNavigationState = connect(mapStateToProps)(AppNavigator);

const store = configureStore({}, navReducer, middlewareNav);
function MyApp() {
  return (
    <Provider store={store}>
      <AppWithNavigationState />
    </Provider>
  );
}

export default MyApp;
