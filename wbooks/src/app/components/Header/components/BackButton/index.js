import React, { Component } from 'react';
import { 
	Image,
	TouchableOpacity
} from 'react-native';

import styles from './styles';
import searchImage from '../../../../../assets/ic_back.png';

class BackButton extends Component {
	render() {
		return (
      <TouchableOpacity>
        <Image style={styles.imageButton}
          source={searchImage}
        />
      </TouchableOpacity>
		);
	}
}

export default BackButton;
