import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
        width: '100%',
        alignItems: 'flex-start',
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 15,
        margin: 10,
    },
    image: {
        width: 40,
        height: 60,
        marginLeft: 15,
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
    bookDescription: {
        fontSize: 15
    }
    
});