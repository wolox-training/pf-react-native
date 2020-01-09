import { StyleSheet } from 'react-native';

import { lightBlue, lightGray } from '../../../../../constants/colors';

export default StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    image: { 
        width: 21, 
        height: 21 
    },
    activeLabel: {
        color: lightBlue
    },
    label: {
        fontSize: 10,
        color: lightGray
    }
});