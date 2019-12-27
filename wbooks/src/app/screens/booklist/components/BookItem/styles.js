import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 15,
        margin: 5
    },
    image: {
        width: 40,
        height: 60,
        marginLeft: 15
    },
    textContainer: {
        flex: 1,
        marginHorizontal: 20,
        borderTopWidth: 0,
        flexGrow: 1
    },
    bookTitle: { 
        fontSize: 17, 
        fontWeight: 'bold'
    },
    bookAuthor: {
        fontSize: 15
    }
    
});
