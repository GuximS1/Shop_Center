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
import { CardEcomOne } from 'react-native-card-ui';
import { ListItem, Icon } from 'react-native-elements'


const App = () => {

  const list = [
    {
      title: 'Clothes',
      icon: 'shirt',
      type: 'ionicon',
      color: '#517fa4'
    },
    {
      title: 'Electronics',
      icon: 'headset',
      type: 'ionicon',
      color: '#FF5555'
    },
    {
      title: 'Sport & Fitness',
      icon: 'barbell',
      type: 'ionicon',
      color: '#796E31'
    },
    {
      title: 'Automobiles & Motorcycles',
      icon: 'car',
      type: 'ionicon',
      color: '#00A00D'
    },
    {
      title: 'Cameras',
      icon: 'camera',
      type: 'ionicon',
      color: '#370C3D'
    },
    {
      title: 'Home & Kitchen',
      icon: 'home',
      type: 'ionicon',
      color: '#FF0000'
    },
    {
      title: 'Watches',
      icon: 'watch',
      type: 'ionicon',
      color: '#C5A803'
    }
  ]
  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <Header />
      <Body />
      <View>
        {
          list.map((item, i) => (
            <ListItem key={i} bottomDivider>
              <Icon name={item.icon} type={item.type} color={item.color} />
              <ListItem.Content>
                <ListItem.Title>{item.title}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          ))
        }
      </View>
    </ScrollView>
  )
};

const styles = StyleSheet.create({

});

export default App;
