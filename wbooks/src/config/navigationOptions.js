import React from 'react';

import BookListActiveIcon from '../../src/assets/ic_library_active.png';
import BookListIcon from '../../src/assets/ic_library.png';
import SettingsActiveIcon from '../../src/assets/ic_settings_active.png';
import SettingsIcon from '../../src/assets/ic_settings.png';
import TabBarIcon from '../../src/app/components/TabBar/components/TabBarIcon';
import HeaderBackground from '../app/components/HeaderBackground';
import { white } from '../constants/colors';
import BackButton from '../app/components/BackButton';
import SearchButton from '../app/components/SearchButton';

export const defaultNavigationOptions = {
  headerStyle: {height: 102, backgroundColor: 'transparent'},
  headerBackground: () => <HeaderBackground/>,
  headerTitleStyle: { color: white, fontSize: 19, fontWeight: '600'},
  headerLeft: () => <BackButton/>,
  headerRight: () => <SearchButton/>
};

export const bookListNavigationOptions = {
  headerShown: false,
  title: 'Library',
  tabBarLabel: null,
  tabBarIcon: ({focused}) => <TabBarIcon activeIcon={BookListActiveIcon} inactiveIcon={BookListIcon} label={'Library'} focused={focused}/>
};

export const settingsNavigationOptions = {
  headerShown: false,
  title: 'Settings',
  tabBarLabel: null,
  tabBarIcon: ({focused}) => <TabBarIcon activeIcon={SettingsActiveIcon} inactiveIcon={SettingsIcon} label={'Settings'} focused={focused}/>
};

export const tabBarOptions = {
  showLabel: false
};
