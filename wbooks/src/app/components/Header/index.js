import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import backgroundImage from '../../../assets/bc_nav_bar.png';
import backImage from '../../../assets/ic_back.png';
import searchImage from '../../../assets/ic_search.png';

import BackButton from './components/BackButton';
import SearchButton from './components/SearchButton';
import styles from './styles';

const CustomHeader = () => (
	<View style={styles.container}>
		<Image style={styles.image}
			source={backgroundImage}
			resizeMode="stretch"
		/>
		<View style={styles.actionContainer}>
			<BackButton/>
			<Text style={styles.text}>BOOK DETAIL</Text>
			<SearchButton/>
		</View>
	</View>
);

export default CustomHeader;
