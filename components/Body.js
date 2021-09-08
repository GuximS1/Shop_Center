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
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';
import { CardTen } from 'react-native-card-ui';
import { SliderBox } from "react-native-image-slider-box";
const Body = () => {
    var myState = [
        require('../images/Promotion2.jpg'),
        require('../images/Promotion3.jpg'),
        require('../images/Promotion1.jpg')]
    var myState1 = [
        require('../images/Watches1.jpg'),
        require('../images/Watches2.jpg'),
        require('../images/Watches3.jpg')]
    return (
        <View style={{ marginTop: '10%' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center', color: '#FF0000', fontWeight: 'bold', backgroundColor: '#CCF1FF' }}>BIG SALES!!</Text>
            <SliderBox images={myState} activeOpacity={1} />
            <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: '5%', marginTop: '8%', color: '#3d3d3d' }}>The most interesting</Text>
            <View style={{ marginTop: '15%', flex: 1, flexDirection: 'row', }}>
                <CardTen
                    title={"Sweety Cake"}
                    subTitle={"70, Nevsky Avenue"}
                    image={require("../images/Promotion3.jpg")}
                    price={33.5}
                    star={3}
                    starsFor={"240 reviews"}
                    width={160}

                />
                <CardTen
                    title={"Sweety Cake"}
                    subTitle={"70, Nevsky Avenue"}
                    image={require("../images/Promotion3.jpg")}
                    price={33.5}
                    star={3}
                    starsFor={"240 reviews"}
                    width={160}
                />
            </View>
            <View style={{ marginTop: '15%', flex: 1, flexDirection: 'row', }}>
                <CardTen
                    title={"Sweety Cake"}
                    subTitle={"70, Nevsky Avenue"}
                    image={require("../images/Promotion3.jpg")}
                    price={33.5}
                    star={3}
                    starsFor={"240 reviews"}
                    width={160}
                />
                <CardTen
                    title={"Sweety Cake"}
                    subTitle={"70, Nevsky Avenue"}
                    image={require("../images/Promotion3.jpg")}
                    price={33.5}
                    star={3}
                    starsFor={"240 reviews"}
                    width={160}
                />
            </View>
            <SliderBox images={myState1} activeOpacity={1} />
        </View>
    );
}

export default Body;