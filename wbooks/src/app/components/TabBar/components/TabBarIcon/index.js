import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

const TabBarIcon = ({ activeIcon, inactiveIcon, focused, label }) => (
  <View style={styles.container}>
    <Image style={styles.image} source={focused ? activeIcon : inactiveIcon } resizeMode="cover"/>
    <Text style={[styles.label, focused && styles.activeLabel]}>{label}</Text>
  </View>
);

export default TabBarIcon;
