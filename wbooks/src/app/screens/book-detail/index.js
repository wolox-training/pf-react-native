import React, { Component } from 'react';
import {  
  View, 
  Image,
  Text,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

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
              <Text style={styles.bookAvailability}>Available</Text>    
              <Text style={styles.bookAuthor}>{book.author}</Text>    
              <Text style={styles.bookYear}>{book.year}</Text>    
              <Text style={styles.bookGenre}>{book.genre}</Text>    
            </View>
          </View>
          <View>
            <TouchableOpacity style={styles.whishListButton}>
              <Text style={styles.whishListButtonText}>ADD TO WISHLIST</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.RentButton}>
              <Text style={styles.RentButtonText}>RENT</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.cardDetail}>
          
        </View>
      </View>
    );
  }
}

export default BookDetail;