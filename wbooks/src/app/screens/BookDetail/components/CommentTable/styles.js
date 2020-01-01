import { StyleSheet } from 'react-native';

import { white, lightBlue } from '../../../../../constants/colors';

export default StyleSheet.create({
  commentTable: {	
    flex: 1,
    borderRadius: 5,
    backgroundColor: white
  },
  linkContainer: {
    alignItems: 'center'
  },
  linkText: {
    fontWeight: '300',
    lineHeight: 18,
    letterSpacing: -0.24,
    textAlign: 'center',
    color: lightBlue,
    margin: 15
  }
});
