// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { Provider } from 'react-redux';

// import { defaultNavigationOptions, bookListNavigationOptions, settingsNavigationOptions, tabBarOptions } from '../config/navigationOptions'
// import BookList from './screens/BookList';
// import BookDetail from './screens/BookDetail';
// import SettingsScreen from './screens/Settings';
// import LoginScreen from './screens/Login';

// const MainNavigator = createStackNavigator({
//   Login: { screen: LoginScreen },
//   Home: { screen: createBottomTabNavigator(
//     {
//       Home: { 
//         screen: BookList,
//         navigationOptions: bookListNavigationOptions
//       },
//       Settings: {
//         screen: SettingsScreen,
//         navigationOptions: settingsNavigationOptions
//       },
//     },
//     {
//       tabBarOptions: tabBarOptions
//     }
//   )},
//   Details: { screen: BookDetail },
// },
// {
//   initialRouteName: 'Login',

//   defaultNavigationOptions: defaultNavigationOptions
// });

// const appContainer = createAppContainer(MainNavigator);

// function App() {
//   return (
//     <Provider store={store}>
//       <appContainer />
//     </Provider>
//   );
// }

// export default App;
