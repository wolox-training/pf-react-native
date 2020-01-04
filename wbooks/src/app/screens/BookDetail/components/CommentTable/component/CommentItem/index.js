import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const CommentItem = ({ userName, comment, uri }) => (
  <View style={styles.container}>
    <Image style={styles.userImage}
      source={{uri}}/>
    <View style={styles.textContainer}>
      <Text style={styles.userName}>{userName}</Text>    
      <Text style={styles.comment}>{comment}</Text>    
    </View>
  </View>
);

export default CommentItem;
