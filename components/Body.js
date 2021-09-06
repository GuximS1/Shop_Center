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

const Body = () => {
    return (
        <View style={{ maxHeight: '65%', flex: 1, flexDirection: 'row', borderWidth: 1 }}>
            <Image source={require("../images/Promotion2.jpg")} style={{ maxWidth: '100%', maxHeight: '45%' }} />
        </View>
    );
}

export default Body;