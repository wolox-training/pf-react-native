
import React from 'react';

import BookListActiveIcon from '../../src/assets/ic_library_active.png';
import BookListIcon from '../../src/assets/ic_library.png';
import SettingsActiveIcon from '../../src/assets/ic_settings_active.png';
import SettingsIcon from '../../src/assets/ic_settings.png';
import CustomHeader from '../../src/app/components/Header';
import TabBarIcon from '../../src/app/components/TabBar/components/TabBarIcon';

export const defaultNavigationOptions = {
  header: <CustomHeader/>
};

export const bookListNavigationOptions = {
  title: 'Library',
  tabBarLabel: null,
  tabBarIcon: ({focused}) => <TabBarIcon activeIcon={BookListActiveIcon} inactiveIcon={BookListIcon} label={'Library'} focused={focused}/>
};

export const settingsNavigationOptions = {
  title: 'Settings',
  tabBarLabel: null,
  tabBarIcon: ({focused}) => <TabBarIcon activeIcon={SettingsActiveIcon} inactiveIcon={SettingsIcon} label={'Settings'} focused={focused}/>
};

export const tabBarOptions = {
  showLabel: false
};