/* eslint-disable */
import React from 'react';

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Alert
} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Header = () => {

    return (
        <View>
            <TouchableOpacity activeOpacity={1} onPress={() => { Alert.alert("You pressed the menu") }}>
                <FontAwesome5 name="grip-lines" size={20} style={{ margin: 5 }} />
            </TouchableOpacity>
        </View>
    );
}

export default Header;