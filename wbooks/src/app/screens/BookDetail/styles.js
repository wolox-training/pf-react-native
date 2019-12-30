import { StyleSheet } from 'react-native';

import { cyan, lightGray, red, white, lightBlue, lightGreen } from '../../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cyan
  },
  cardDetail: {	
    borderRadius: 5,
    backgroundColor: white,
    margin: 20
  },
  cardContainer: {
    flexDirection: 'row',
    borderRadius: 5,
    marginHorizontal: 30,
    marginTop: 8
  },
  image: {
    width: 69,
    height: 105,
    marginStart: 18,
    marginTop: 7
  },
  textContainer: {
    flex: 1,
    marginHorizontal: 20,
    borderTopWidth: 0
  },
  bookTitle: { 
    fontSize: 24, 
    fontWeight: 'bold',
    color: lightGray,
    letterSpacing: -0.58,
    lineHeight: 29
  },
  bookText: {
    fontSize: 15,
    color: lightGray,
    fontWeight: '300',
    letterSpacing: -0.24,
    lineHeight: 18
  },
  bookAvailability: {
    fontSize: 15,
    color: lightGreen,
    fontWeight: 'bold',
    letterSpacing: -0.36,
    lineHeight: 18
  },
  whishListButton: {
    borderColor: lightBlue,
    borderRadius: 100,
    borderWidth: 1,
    marginHorizontal: 30,
    marginTop: 30
  },
  ButtonText: {
    alignSelf: 'center',
    margin: 13,
    fontSize: 15,
    color: lightBlue,
    fontWeight: '900',
    letterSpacing: -0.19
  },
  RentButton: {
    borderColor: lightBlue,
    borderRadius: 100,
    borderWidth: 1,
    marginHorizontal: 30,
    marginTop: 10,
    marginBottom: 22,
  }

});
