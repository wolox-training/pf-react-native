import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';

class BookItem extends Component {

  render() {
    const { urlPath, title, writer } = this.props;
    
    return (
      <View style={styles.container}>
        <Image style={styles.image}
        source={{uri: urlPath}} />
        <View style={styles.textContainer}>
          <Text style={styles.bookTitle}>{title}</Text>    
          <Text style={styles.bookDescription}>{writer}</Text>    
        </View>
      </View>
    );
  }
}

export default BookItem;
