/* eslint-disable */
import React, { useState } from 'react';

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Alert,
    Image,
} from 'react-native';
import { ListItem, Icon } from 'react-native-elements'
const Menu = () => {
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
        },
        {
            title: 'Tools',
            icon: 'hammer',
            type: 'ionicon',
            color: '#000000'
        }
        ,
        {
            title: 'Kids toys',
            icon: 'game-controller',
            type: 'ionicon',
            color: '#3EFFDF'
        }
    ]
    return (
        <View>
            <Text style={{textAlign:'center',fontWeight:'bold',backgroundColor:'lightblue',fontSize:20,fontStyle:'italic'}}>Menu</Text>
            {
                list.map((item, i) => (
                    <ListItem key={i} bottomDivider >
                        <Icon name={item.icon} type={item.type} color={item.color} />
                        <ListItem.Content>
                            <ListItem.Title>{item.title}</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                ))
            }
        </View>
    );
}

export default Menu;
