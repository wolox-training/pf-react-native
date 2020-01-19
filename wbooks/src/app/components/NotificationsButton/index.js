import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

import backImage from '../../../assets/ic_notifications.png';

import styles from './styles';

class NotificationsButton extends Component {
  handleGoBack = () => {};
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

export default withNavigation(NotificationsButton);
