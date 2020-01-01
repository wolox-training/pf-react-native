import React, { Component } from 'react';
import {  
  View, 
  Text,
  ScrollView,
  SafeAreaView
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import CommentItem from './component/CommentItem';

class CommentTable extends Component {

	 
	render() {

		return (
      <SafeAreaView style={styles.commentTable}>
        <ScrollView>
          <CommentItem/>
          <CommentItem/>
          <CommentItem/>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default CommentTable;
