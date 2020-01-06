import React, { Component } from 'react';
import {  
  Text,
  View,
  FlatList
} from 'react-native';

import COMMENTS from '../../comments';

import CommentItem from './component/CommentItem';
import styles from './styles';

class CommentTable extends Component {

  renderItem = ({ item }) => (
    <CommentItem 
      userName={item.userName}
      comment={item.comment}
      uri={item.imageUrl}
    />
  );
  keyExtractor = item => `${item.id}`;

	render() {

		return (
      <View style={styles.commentTable}>
        <FlatList
          data={COMMENTS}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
        {COMMENTS.length > 5 && (<Text style={styles.linkText}>View All</Text>)}
      </View>
    );
  }
}

export default CommentTable;
