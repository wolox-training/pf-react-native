import React, { Component } from 'react';
import {  
  View, 
  Image,
  Text 
} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

class BookDetail extends Component {
	 
	render() {

    const book = this.props.navigation.getParam('book');

		return (
      <View style={styles.container}>
        <View style={styles.cardDetail}>
          <View style={styles.cardContainer}>
            <Image style={styles.image}
            source={{uri: book.image_url}} />
            <View style={styles.textContainer}>
              <Text style={styles.bookTitle}>{book.title}</Text>    
              <Text style={styles.bookWriter}>{book.author}</Text>    
              <Text style={styles.bookYear}>{book.year}</Text>    
              <Text style={styles.bookGenre}>{book.genre}</Text>    
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default BookDetail;