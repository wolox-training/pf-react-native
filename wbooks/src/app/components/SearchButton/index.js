import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';

import searchImage from '../../../assets/ic_search.png';

import styles from './styles';

class SearchButton extends Component {
	render() {
		return (
      <TouchableOpacity onPress={() => {}}>
        <Image style={styles.imageButton}
          source={searchImage}
        />
      </TouchableOpacity>
		);
	}
}

export default SearchButton;
