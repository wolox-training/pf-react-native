import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

class BookItem extends Component {

  render() {
    const { uri, title, writer } = this.props;
    
    return (
      <View style={styles.container}>
        <Image style={styles.image}
        source={{uri}} />
        <View style={styles.textContainer}>
          <Text style={styles.bookTitle}>{title}</Text>    
          <Text style={styles.bookWriter}>{writer}</Text>    
        </View>
      </View>
    );
  }
}

BookItem.propTypes = {
  uri: PropTypes.string,
  title: PropTypes.string.isRequired,
  writer: PropTypes.string.isRequired,
};

export default BookItem;
