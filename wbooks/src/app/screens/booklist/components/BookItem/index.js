import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';

class BookItem extends Component {

	render() {
		return (
      <View style={styles.container}>
        <Image style={styles.image}
        source={{uri: 'http://wolox-training.s3.amazonaws.com/uploads/6942334-M.jpg'}} />
        <View style={styles.textContainer}>
          <Text style={styles.bookTitle}>A Little Bird Told Me</Text>    
          <Text style={styles.bookDescription}>Timothy Cross</Text>    
        </View>
      </View>
		);
	}
}

export default BookItem;
