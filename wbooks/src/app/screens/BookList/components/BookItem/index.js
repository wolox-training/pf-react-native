import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

class BookItem extends Component {

  render() {
    const { uri, title, author } = this.props;
    return (
      <View style={styles.container}>
        <Image style={styles.image}
        source={{uri}} />
        <View style={styles.textContainer}>
          <Text style={styles.bookTitle}>{title}</Text>    
          <Text style={styles.bookAuthor}>{author}</Text>    
        </View>
      </View>
    );
  }
}

BookItem.propTypes = {
  uri: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

export default BookItem;
