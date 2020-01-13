import React, { Component }  from 'react';
import { View, Image } from 'react-native';

import LoginScreen from './layout';
import backgrounImage from '../../../assets/bc_inicio.png'
import styles from './styles';

class LoginLogout extends Component {
	render() {
		return (
			<View>
				<Image 
					style={styles.background} 
					source={backgrounImage}
					resizeMode="stretch"
				/>
				<LoginScreen/>
			</View>
		);
	}
}

export default LoginLogout;