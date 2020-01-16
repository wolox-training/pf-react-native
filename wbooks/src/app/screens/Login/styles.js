import { StyleSheet } from 'react-native';

import { white } from '../../../constants/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    alignItems: 'center',
  },
  background: {
    height: '100%',
    width: '100%'
  },
  components: {
    width: '100%',
    height: '95%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 184,
    height: 135,
  },
  loginButton: {
    marginTop: 83,
    borderColor: white,
    borderRadius: 100,
    borderWidth: 1
  },
  loginButtonText: {
    marginVertical: 14,
    marginHorizontal: 30,
    fontSize: 15,
    color: white,
    fontWeight: '900',
    letterSpacing: 0.19
  },
  text: {
    fontSize: 12,
    letterSpacing: -0.29,
    lineHeight: 14
  }
  
});
