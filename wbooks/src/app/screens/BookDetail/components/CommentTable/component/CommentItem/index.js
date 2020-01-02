import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const CommentItem = ( userName, comment, uri ) => (
  <View style={styles.container}>
    <Image style={styles.userImage}
    source={{uri:"http://wolox-training.s3.amazonaws.com/uploads/el-psicoanalista-analyst-john-katzenbach-paperback-cover-art.jpg"}}/>
    <View style={styles.textContainer}>
      <Text style={styles.userName}>John Appleseed</Text>    
      <Text style={styles.comment}>It was great to see you again earlier. Let’s definitely get that coffe It was great to see you again earlier.</Text>    
    </View>
  </View>
);

export default CommentItem;
