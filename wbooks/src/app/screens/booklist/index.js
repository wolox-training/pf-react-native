import React, { Component } from 'react';
import { 
	SafeAreaView, 
	View, 
	StyleSheet, 
	FlatList 
} from 'react-native';
import BookItem from './components/BookItem';
import styles from './styles';
import books from './books';

class BookList extends Component {
	 
	render() {

		return (
			<SafeAreaView style={styles.container}>
				<FlatList
					data={books}
					renderItem={({ item }) => 
						<BookItem 
							title= {item.title}
							writer= {item.author}
							urlPath= {item.image_url}
						/>
					}
					keyExtractor={item => `${item.id}`}
				/>
			</SafeAreaView>
		);
	}
}

export default BookList;
