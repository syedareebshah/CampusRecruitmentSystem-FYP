import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TextInput, Button } from 'react-native-paper';

import {
    Image,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
} from 'react-native';


const FirstScreen = ({ navigation }) => {

    return (
        <ScrollView>
            <View style={styles.main}>

                <Image style={styles.logo} source={require('./../assets/logo.png')} />

                <Button style={styles.btn} onPress={() => navigation.navigate('StudentLogin')} mode="contained">
                    Continue As a Student
                </Button>
                <Button style={styles.btn} onPress={() => navigation.navigate('CompLogin')} mode="contained">
                    Continue As a Company
                </Button>
                <Button style={styles.btn} onPress={() => navigation.navigate('AdminLogin')} mode="contained">
                    Continue As an Admin
                </Button>

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    main: {
        marginTop:50,
        flex: 1,
        padding: 20,
        marginBottom:50
    },
    btn: {
        padding: 10,
        margin: 10,
    },
    logo: {
        marginBottom:50,
        alignSelf:'center',
        resizeMode: 'contain',
        height: 150,
        width: 150,
    }


});

export default FirstScreen;
