import React from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const TabBarIcon = ({ activeIcon, inactiveIcon, focused, label }) => (
  <View style={styles.container}>
    <Image style={styles.image} source={focused ? activeIcon : inactiveIcon} resizeMode="cover"/>
    <Text style={[styles.label, focused && styles.activeLabel]}>{label}</Text>
  </View>
);

TabBarIcon.propTypes = {
  focused: PropTypes.bool.isRequired,
  activeIcon: PropTypes.number.isRequired,
  inactiveIcon: PropTypes.number.isRequired,
  label: PropTypes.string
};

export default TabBarIcon;
