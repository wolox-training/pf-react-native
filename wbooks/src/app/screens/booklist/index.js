import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import BookItem from './components/BookItem';

class BookList extends Component {

	render() {
		return (
			<View style={styles.container}>
                <BookItem />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
        alignItems: 'center',
        padding:20,
	}
});

export default BookList;