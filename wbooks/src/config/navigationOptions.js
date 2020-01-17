import React from 'react';
import { Image } from 'react-native';

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

import { stylesGenericOptions, stylesLibraryHeader } from './styles';

export const navigationOptionsStyle = {
  headerBackground: <Image source={headerBackground} />,
  headerBackImage: <Image style={stylesGenericOptions.imageBack} source={back} />,
  headerBackTitle: null,
  shadowRadius: 0,
  shadowOffset: {
    height: 0
  },
  headerStyle: {
    borderBottomWidth: 0,
    backgroundColor: lightBlue,
    marginBottom: 50
  },
  headerTitleStyle: {
    color: white,
    fontWeight: 'bold',
    fontSize: 17
  },
  headerForceInset: { top: 'never' }
};

export const defaultNavigationOptions = {
  defaultNavigationOptions: navigationOptionsStyle,
  headerLayoutPreset: 'center'
};

export const navigationOptionsTitle = name => ({
  title: NAMES[name]
});

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
