import { StyleSheet } from 'react-native';
import { cyan } from '../../../constants/colors';

export default StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: cyan
  },
  cardDetail: {	
    height: 270,
    borderRadius: 5,
    backgroundColor: 'white',
    margin: 20
  },
  cardContainer: {	
    alignItems: 'flex-start',
    flexDirection: 'row',
    backgroundColor: 'red',
    height: 112,
    borderRadius: 5,
    marginStart: 30,
    marginTop: 8,
    marginEnd: 30
  },
  image: {
      width: 69,
      height: 105,
      marginStart: 18,
      marginTop: 3
  },
  textContainer: {
      flex: 1,
      marginHorizontal: 20,
      borderTopWidth: 0,
      flexGrow: 1
  },
  bookTitle: { 
      fontSize: 24, 
      fontWeight: 'bold'
  },
  bookYear: {
      fontSize: 15
  },
  bookWriter: {
      fontSize: 15
  },
  bookGenre: {
      fontSize: 15
  }

});
