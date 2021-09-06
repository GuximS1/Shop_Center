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

const Body = () => {
    return (
        <View style={{ marginTop: '10%' }}>
            <Image source={require("../images/Promotion2.jpg")} style={{ maxWidth: '120%', height: 250 }} />
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




        </View>
    );
}

export default Body;