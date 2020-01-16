import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

import backImage from '../../../assets/ic_back.png';

import styles from './styles';

class BackButton extends Component {
  handleGoBack = () => this.props.navigation.goBack(null);
	render() {
		return (
      <TouchableOpacity onPress={this.handleGoBack}>
        <Image style={styles.imageButton}
          source={backImage}
        />
      </TouchableOpacity>
		);
	}
}

export default withNavigation(BackButton);
