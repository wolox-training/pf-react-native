import React, { Component } from 'react';
import { 
	SafeAreaView, 
	View, 
	StyleSheet, 
	FlatList 
} from 'react-native';
import BookItem from './components/BookItem';
import styles from './styles';
import BOOKS from './books';

class BookList extends Component {

	renderItem = ({ item }) => (
		<BookItem 
			title= {item.title}
			author= {item.author}
			uri= {item.image_url}
		/>
	);
	keyExtractor = item => `${item.id}`;
	 
	render() {

		return (
			<SafeAreaView style={styles.container}>
				<FlatList
					data={BOOKS}
					renderItem={this.renderItem}
					keyExtractor={this.keyExtractor}
				/>
			</SafeAreaView>
		);
	}
}

export default BookList;
