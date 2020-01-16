import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import backgrounImage from '../../../assets/bc_inicio.png'
import logo from '../../../assets/Group.png'

import styles from './styles';

const Login = () => (
  <View>
    <Image 
      style={styles.background} 
      source={backgrounImage}
      resizeMode="stretch"
    />
    <View style={styles.container}>
      <View style={styles.components}>
        <Image style={styles.image} source={logo}/>
          <TouchableOpacity onPress={() => {}} style={styles.loginButton}>
            <Text style={styles.loginButtonText}>INGRESAR CON GOOGLE</Text>
          </TouchableOpacity>
      </View>
      <Text style={styles.text}>Designed, developed and used by woloxers</Text>
    </View>
   
  </View>
);

export default Login;
