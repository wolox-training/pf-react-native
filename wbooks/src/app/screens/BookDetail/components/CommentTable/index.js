import React, { Component } from 'react';
import {  
  Text,
  View,
  ScrollView
} from 'react-native';

import CommentItem from './component/CommentItem';
import styles from './styles';

class CommentTable extends Component {

	render() {

		return (
      <View style={styles.commentTable}>
        <ScrollView>
          <CommentItem/>
          <CommentItem/>
          <CommentItem/>
          <CommentItem/>
          <CommentItem/>
        </ScrollView>
          <Text style={styles.linkText}>View All</Text>
      </View>
    );
  }
}

export default CommentTable;
