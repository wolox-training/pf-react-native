import React from 'react';
import { Image } from 'react-native';
import { getActiveChildNavigationOptions } from 'react-navigation';

import SearchButton from '../app/components/SearchButton';
import BackButton from '../app/components/BackButton';
import NotificationsButton from '../app/components/NotificationsButton';
import BookListActiveIcon from '../../src/assets/ic_library_active.png';
import BookListIcon from '../../src/assets/ic_library.png';
import SettingsActiveIcon from '../../src/assets/ic_settings_active.png';
import headerBackground from '../../src/assets/bc_nav_bar.png';
import back from '../../src/assets/ic_back.png';
import SettingsIcon from '../../src/assets/ic_settings.png';
// import CustomHeader from '../../src/app/components/Header';
import TabBarIcon from '../../src/app/components/TabBar/components/TabBarIcon';
import { lightBlue, white } from '../constants/colors';
import { NAMES } from '../constants/screenNames';
import styles from './styles';

export const defaultNavigationOptions = {
  headerStyle: styles.header,
  headerBackground: () => <Image style={styles.background} source={headerBackground}/>,
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
