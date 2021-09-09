/* eslint-disable */
import React from 'react';
import { Root, Toast } from 'react-native-popup-confirm-toast'
import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import { ListItem, Icon } from 'react-native-elements'
const Notifications = () => {
    return ( 
        <Root >
        <View style={{position:'absolute'}}>
            <TouchableOpacity style={{width:30,height:30,position:'absolute',marginLeft:265}}
                onPress={() => 
                      Toast.show({
                        title: 'Dikkat!',
                        text: 'Mutlak özgürlük, kendi başına hiçbir anlam ifade etmez.',
                        color: '#702c91',
                        timeColor: '#440f5f',
                        timing: 5000,
                        icon: <Icon name={'check'} color={'#fff'} size={31}/>,
                        position: 'top',
                    })
                }
            >
                
            </TouchableOpacity>
        </View>
    </Root>
     );
}
 
export default Notifications;