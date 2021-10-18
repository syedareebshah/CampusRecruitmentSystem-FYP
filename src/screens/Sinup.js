import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TextInput, Button } from 'react-native-paper';

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
} from 'react-native';


const Sinup = ({ navigation }) => {

    return (
            <View style={styles.main}>
                <View style={{width:100,height:100,backgroundColor:'red',flex:1}}>

                </View>
                <View style={{width:100,height:100,backgroundColor:'blue',flex:5}}>

                </View>
                <View style={{width:100,height:100,backgroundColor:'yellow',flex:5}}>

                </View>
            </View> 
    );
};

const styles = StyleSheet.create({
    main: {
        alignItems: 'center',
        width:'100%',
        height:'100%',
        flex: 1,
        flexDirection:'column-reverse',
        justifyContent: 'space-between',
    },
    header: {
        width: '100%',
        backgroundColor: 'white',
        flex: 1,
    },
    middle: {
        backgroundColor: 'green',
        width: '100%',
        flex: 6,
    },
    footer: {
        backgroundColor: 'yellow',
        flex: 1,
        width: '100%',
    },

});

export default Sinup;
