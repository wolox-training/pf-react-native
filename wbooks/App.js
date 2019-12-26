/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import BookList from './src/app/screens/booklist';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar  />
      <SafeAreaView>
        <View style={{ height:'100%' }}>
          <BookList />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
