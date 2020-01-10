import { StyleSheet } from 'react-native';

import { lightBlue, lightGray } from '../../../../../constants/colors';

const iconSize = 21;

export default StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    image: { 
        width: iconSize, 
        height: iconSize 
    },
    activeLabel: {
        color: lightBlue
    },
    label: {
        fontSize: 10,
        color: lightGray
    }
});
