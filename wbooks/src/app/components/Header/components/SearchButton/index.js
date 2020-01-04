import React, { Component } from 'react';
import { 
	Image,
	TouchableOpacity
} from 'react-native';

import styles from './styles';
import searchImage from '../../../../../assets/ic_search.png';

class SearchButton extends Component {
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

export default SearchButton;
