/* eslint-disable */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Body from './components/Body';
import Header from './components/Header';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Body />
    </View>
  )
};

const styles = StyleSheet.create({

});

export default App;
