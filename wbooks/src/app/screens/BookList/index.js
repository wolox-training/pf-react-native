import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, TouchableOpacity, Image, Text } from 'react-native';

import { ROUTES } from '../../../constants/routes';

import BookItem from './components/BookItem';
import styles from './styles';
import BOOKS from './books';

class BookList extends Component {
	renderItem = ({ item }) => (
		<TouchableOpacity onPress={
			() => this.props.navigation.navigate(ROUTES.BookDetail, {
			book: item
		})}>
			<BookItem 
				title= {item.title}
				author= {item.author}
				uri= {item.image_url}
			/>
		</TouchableOpacity>
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
