import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { getActiveChildNavigationOptions } from 'react-navigation';

import SearchButton from '../app/components/SearchButton';
import BackButton from '../app/components/BackButton';
import NotificationsButton from '../app/components/NotificationsButton';
import BookListActiveIcon from '../../src/assets/ic_library_active.png';
import BookListIcon from '../../src/assets/ic_library.png';
import SettingsActiveIcon from '../../src/assets/ic_settings_active.png';
import SettingsIcon from '../../src/assets/ic_settings.png';
import TabBarIcon from '../../src/app/components/TabBar/components/TabBarIcon';
import { NAMES } from '../constants/screenNames';
import BackgroundImage from '../app/components/BackgroundImage/index';

import styles from './styles';

export const defaultNavigationOptions = {
  headerStyle: styles.header,
  headerTransparent: false,
  headerBackground: () => <BackgroundImage/>,
  headerTitleStyle: styles.headerTitle,
  headerTitleAlign: 'center',
  headerRight: () => <SearchButton/>
};

export const bookListNavigationOptions = {
  headerLeft: () => <NotificationsButton/>,
  title: NAMES.BookList,
  tabBarLabel: null,
  tabBarIcon: ({focused}) => <TabBarIcon activeIcon={BookListActiveIcon} inactiveIcon={BookListIcon} label={'Library'} focused={focused}/>
};

export const bookDetailNavigationOptions = {
  headerLeft: () => <BackButton/>,
  title: NAMES.BookDetail,
  tabBarLabel: null,
  tabBarIcon: ({focused}) => <TabBarIcon activeIcon={BookListActiveIcon} inactiveIcon={BookListIcon} label={'Library'} focused={focused}/>
};

export const settingsNavigationOptions = {
  headerLeft: () => <BackButton/>,
  title: NAMES.Settings,
  tabBarLabel: null,
  tabBarIcon: ({focused}) => <TabBarIcon activeIcon={SettingsActiveIcon} inactiveIcon={SettingsIcon} label={'Settings'} focused={focused}/>
};

export const childTabsNavigationOptions = ({ navigation, screenProps }) =>
 getActiveChildNavigationOptions(navigation, screenProps);

export const noHeaderNavigationOptions = {
    headerMode: 'none',
    headerShown: false
};

export const tabBarOptions = {
  showLabel: false
};
