import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

const TabBarIcon = ({ imageIcon, label }) => (
  <View style={styles.container}>
    <Image style={styles.image} source={ imageIcon } resizeMode="cover"/>
    <Text style={styles.label}>{label}</Text>
  </View>
);

export default TabBarIcon;
