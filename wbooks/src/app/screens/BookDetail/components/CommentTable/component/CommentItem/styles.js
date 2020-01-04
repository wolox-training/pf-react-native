import { StyleSheet } from 'react-native';
import { darkGray, cyan } from '../../../../../../../constants/colors';

const userSize = 45;

export default StyleSheet.create({
	container: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 15
    },
    userImage: {
        width: userSize,
        height: userSize,
        borderRadius: 100
    },
    textContainer: {
        flex: 1,
        marginLeft: 20
    },
    userName: { 
        fontSize: 15, 
        fontWeight: 'bold',
        color: darkGray,
        letterSpacing: -0.36,
        lineHeight: 18
    },
    comment: {
        fontSize: 15,
        fontWeight: '300',
        letterSpacing: -0.24,
        lineHeight: 18,
        marginTop: 5
    }
    
});
