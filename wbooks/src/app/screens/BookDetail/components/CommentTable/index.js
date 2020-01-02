import React, { Component } from 'react';
import {  
  Text,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native';

import CommentItem from './component/CommentItem';
import styles from './styles';
import COMMENTS from '../../comments';

class CommentTable extends Component {

  renderItem = ({ item }) => (
    <TouchableOpacity 
      onPress={() => {}}
    >
      <CommentItem 
        userName={item.userName}
        comment={item.comment}
        uri={item.imageUrl}
      />
    </TouchableOpacity>
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
        <Text style={styles.linkText}>View All</Text>
      </View>
    );
  }
}

export default CommentTable;
