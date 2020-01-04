import React, { Component } from 'react';
import { 
  View,
  Text,
	Image,
	TouchableOpacity
} from 'react-native';

import backgroundImage from '../../../assets/bc_nav_bar.png';
import backImage from '../../../assets/ic_back.png';
import searchImage from '../../../assets/ic_search.png';
import BackButton from './components/BackButton';
import styles from './styles';

class CustomHeader extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Image style={styles.image}
					source={backgroundImage}
					resizeMode="stretch"
				/>
				<View style={styles.actionContainer}>
					<BackButton/>
					<Text style={styles.text}>BOOK DETAIL</Text>
					<TouchableOpacity>
						<Image style={styles.imageButton}
							source={searchImage}
						/>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

export default CustomHeader;
