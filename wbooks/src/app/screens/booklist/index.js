import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import BookItem from './components/BookItem';
import styles from './styles';

class BookList extends Component {

	render() {
		return (
			<View style={styles.container}>
        <BookItem />
			</View>
		);
	}
}

export default BookList;
