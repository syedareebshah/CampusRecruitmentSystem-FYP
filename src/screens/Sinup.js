import React from 'react';

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

import { Button } from 'react-native-paper';


const Sinup = ({ navigation }) => {

    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('go')} activeOpacity={0.5}>
                <Text>Sinup</Text>
            </TouchableOpacity>
            <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                Press me
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default Sinup;
