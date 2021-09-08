/* eslint-disable */
import React, { useState } from 'react';

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Alert,
    Image,
    Button
} from 'react-native';
import Modal from "react-native-modal";
import SearchBar from "react-native-dynamic-search-bar";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Header = () => {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    return (
        <View style={{ marginTop: '5%', flex: 1, flexDirection: 'column' }}>
            <View style={{ flex: 1, flexDirection: 'row', marginLeft: "3%" }}>
                <TouchableOpacity style={{ width: 20, marginLeft: '2%', height: 30 }} onPress={toggleModal}>
                    <FontAwesome5 name="bars" size={25} color={'#3d3d3d'} >
                    </FontAwesome5>
                </TouchableOpacity>
                <Modal isVisible={isModalVisible}>
                    <View style={{ flex: 1 }}>
                        <Button title="Hide modal" onPress={toggleModal} />
                    </View>
                </Modal>
                <Image source={require('../images/Shop_logo.png')} style={{ width: 35, height: 25, marginLeft: 10, }} />
                <Text style={{ fontSize: 21, fontWeight: 'bold', color: '#3d3d3d', marginLeft: 5 }}>SHOP</Text>
                <TouchableOpacity style={{ width: 23, marginLeft: '31%', height: 30 }} onPress={() => { Alert.alert("You pressed the notifications!") }}>
                    <FontAwesome5 name="bell" size={25} color={'#3d3d3d'} >
                    </FontAwesome5>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: 26, marginLeft: '6%', height: 30 }} onPress={() => { Alert.alert("You pressed the sign in!") }}>
                    <FontAwesome5 name="user" size={25} color={'#3d3d3d'} >
                    </FontAwesome5>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: 30, marginLeft: '4%', height: 30 }} onPress={() => { Alert.alert("You pressed the My orders!") }}>
                    <FontAwesome5 name="shopify" size={25} color={'#3d3d3d'} >
                    </FontAwesome5>
                </TouchableOpacity>
            </View >
            <SearchBar
                height={70}
                placeholder="Search"
                style={{ marginTop: '2%', width: '92%', height: 55, backgroundColor: '#CECECE', }}
            //https://www.npmjs.com/package/react-native-dynamic-search-bar
            />

        </View>
    );
}

export default Header;