import { StyleSheet } from 'react-native';

import { white } from '../constants/colors';

export default StyleSheet.create({
  header: {
    height: 102, 
    backgroundColor: 'black'
  },
  background: {
    width: '100%',
    resizeMode: 'stretch',
  },
  headerTitle: {
    color: white, 
    fontSize: 19, 
    fontWeight: 'bold'
  }
});
