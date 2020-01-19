import React, { Component } from 'react';
import { Image, View } from 'react-native';

import background from '../../../assets/bc_nav_bar.png';

import styles from './styles';

const BackgroundImage = () => (
  <View style={styles.background}>
    <Image style={styles.image}
      source={background}
    />
  </View>
);

export default BackgroundImage;
