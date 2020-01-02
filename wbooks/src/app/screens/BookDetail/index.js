import React, { Component } from 'react';
import {  
  View, 
  Image,
  Text,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import CommentTable from './components/CommentTable';

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
              <Text style={styles.bookText}>{book.author}</Text>    
              <Text style={styles.bookText}>{book.year}</Text>    
              <Text style={styles.bookText}>{book.genre}</Text>    
            </View>
          </View>
          <View>
            <TouchableOpacity onPress={() => {}} style={styles.whishListButton}>
              <Text style={styles.ButtonText}>ADD TO WISHLIST</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={styles.RentButton}>
              <Text style={styles.ButtonText}>RENT</Text>
            </TouchableOpacity>
          </View>
        </View>
          <CommentTable/>
      </View>
    );
  }
}

export default BookDetail;
