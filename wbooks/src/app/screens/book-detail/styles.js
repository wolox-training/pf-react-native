import { StyleSheet } from 'react-native';
import { cyan, lightGray } from '../../../constants/colors';

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
    flexDirection: 'row',
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
      fontWeight: 'bold',
      color: lightGray,
      letterSpacing: -0.58,
      lineHeight: 29
  },
  bookYear: {
      fontSize: 15,
      color: lightGray,
      fontWeight: '300',
      letterSpacing: -0.24,
      lineHeight: 18
  },
  bookWriter: {
      fontSize: 15,
      color: lightGray,
      fontWeight: '300',
      letterSpacing: -0.24,
      lineHeight: 18
  },
  bookGenre: {
      fontSize: 15,
      color: lightGray,
      fontWeight: '300',
      letterSpacing: -0.24,
      lineHeight: 18
  }

});
