import React, { Component }  from 'react';

import { View, TouchableOpacity, Text } from 'react-native';

import { ROUTES } from '../../../constants/routes';

import Login from './layout';

class LoginScreen extends Component {
  handleGoBack = () => this.props.navigation.navigate(ROUTES.BookList, {});
	render() {
		return (
			<Login handler={this.handleGoBack}/>
		);
	}
}

export default LoginScreen;
