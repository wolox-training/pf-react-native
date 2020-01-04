import { StyleSheet } from 'react-native';
import { white, cyan } from '../../../../../constants/colors';

const imageButtonSize = 20;

export default StyleSheet.create({
  image: {
    position: 'absolute',
    width: '100%'
  },
  imageButton: {
    width: imageButtonSize,
    height: imageButtonSize
  },
  actionContainer: {
    marginHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 42
  },
  text: {
    color: white,	
    fontSize: 17,
    fontWeight: '600',
    letterSpacing: -0.41,
    lineHeight: 20,
    textAlign: 'center'
  }
});
