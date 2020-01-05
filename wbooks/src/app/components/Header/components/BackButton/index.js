import React, { Component } from 'react';
import { 
	Image,
	TouchableOpacity
} from 'react-native';
import { withNavigation } from 'react-navigation';

import styles from './styles';
import searchImage from '../../../../../assets/ic_back.png';

class BackButton extends Component {
  handleGoBack = () => this.props.navigation.goBack(null);
	render() {
		return (
      <TouchableOpacity onPress={this.handleGoBack}>
        <Image style={styles.imageButton}
          source={searchImage}
        />
      </TouchableOpacity>
		);
	}
}

export default withNavigation(BackButton);
