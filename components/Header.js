/* eslint-disable */
import React from 'react';

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Alert,
    Image
} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Header = () => {

    return (
        <View style={{ margin: 10, flex: 1, flexDirection: 'row' }}>
            <TouchableOpacity style={{ width: 20, }} onPress={() => { Alert.alert("You pressed the menu") }}>
                <FontAwesome5 name="bars" size={25} color={'#3d3d3d'} >
                </FontAwesome5>
            </TouchableOpacity>
            <Image source={require('../images/Shop_logo.png')} style={{ width: 35, height: 25, marginLeft: 10 }} />
            <Text style={{ fontSize: 21, fontWeight: 'bold', color: '#3d3d3d', marginLeft: 5 }}>SHOP</Text>
        </View >
    );
}

export default Header;