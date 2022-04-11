import React from 'react';
import { Button } from 'react-native-paper';

import {
    StyleSheet,
    Image,
    Text,
    View,
    ScrollView,
} from 'react-native';


const CompProfile = ({ navigation }) => {

    return (
        <ScrollView>
            <View style={{ padding: 40 }}>

                <View style={styles.firstView}>
                    <Image style={styles.logo} source={require('./../assets/profile.jpg')} />
                </View>
                <View style={styles.ScndView}>
                    <View style={styles.items}>
                        <Text style={styles.label}>Name</Text>
                        <Text>Netsol</Text>
                    </View>

                    <View style={styles.items}>
                        <Text style={styles.label}>Address</Text>
                        <Text>NETSOL Avenue، Main Ghazi Rd, Khuda Buksh Colony, Lahore, Punjab 54792</Text>
                    </View>

                    <View style={styles.items}>
                        <Text style={styles.label}>Field</Text>
                        <Text>IT</Text>
                    </View>

                    <View style={styles.items}>
                        <Text style={styles.label}>Ranking</Text>
                        <Text>4.7</Text>
                    </View>

                    <View style={styles.items}>
                        <Text style={styles.label}>Email</Text>
                        <Text>netsole@gmail.com</Text>
                    </View>

                    <View style={styles.items}>
                        <Text style={styles.label}>Contact</Text>
                        <Text>042 123456</Text>
                    </View>

                    <Button mode="contained" onPress={() =>navigation.navigate('PostJob')}>
                        Post A Job
                    </Button>

                    <Button mode="contained" onPress={() => console.log('Pressed')}>
                        Update Profile
                    </Button>

                </View>

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    firstView: {
        marginTop: 20,
        padding: 20,
    },
    ScndView: {
        flex: 1,
        flexDirection: 'column',
        marginBottom: 50
    },

    items: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },

    logo: {
        marginBottom: 40,
        alignSelf: 'center',
        resizeMode: 'contain',
        height: 150,
        width: 150,
    },
    label: {
        fontWeight: 'bold',
        marginRight: 40,
        marginBottom: 5,
        marginTop: 5
    },

});

export default CompProfile;
