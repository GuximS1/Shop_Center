/* eslint-disable */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import Body from './components/Body';
import Header from './components/Header';

const App = () => {
  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <Header />
      <Body />
    </ScrollView>
  )
};

const styles = StyleSheet.create({

});

export default App;
