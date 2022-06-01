import React, { useEffect, useState } from 'react';
import { Button } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth';

import {
    StyleSheet,
    Image,
    Text,
    View,
    ScrollView,
} from 'react-native';




const CompProfile = ({ navigation }) => {

    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
    const [userid, setUserid] = useState();
    const [display, setDisplay] = useState()
    console.log(display, "...");


    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }


    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        if (!user) {
            console.log("not found")
        }
        else {
            setUserid(user.uid)
            getData(user.uid)
        }

        return subscriber; // unsubscribe on unmount
    }, [user]);

    const getData = (userdata) => {
        let tempArray = []

        firestore()
            .collection('Company')
            .where('id', '==', `${userdata}`)
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    tempArray.push(documentSnapshot.data())
                });
                setDisplay(tempArray)

            })

    }


    return (
        <ScrollView>
            {
                display &&
                display.map((obj, i) => {
                    return (
                        <View key={i} style={{ padding: 40 }}>

                            <View style={styles.firstView}>
                                <Image style={styles.logo} source={require('./../assets/profile.jpg')} />
                            </View>
                            <View style={styles.ScndView}>
                                <View style={styles.items}>
                                    <Text style={styles.label}>Name</Text>
                                    <Text>{obj.name}</Text>
                                </View>

                                <View style={styles.items}>
                                    <Text style={styles.label}>Address</Text>
                                    <Text>{obj.address}</Text>
                                </View>

                                <View style={styles.items}>
                                    <Text style={styles.label}>Field</Text>
                                    <Text>{obj.field}</Text>
                                </View>

                                

                                <View style={styles.items}>
                                    <Text style={styles.label}>Email</Text>
                                    <Text>{obj.email}</Text>
                                </View>

                                <View style={styles.items}>
                                    <Text style={styles.label}>Contact</Text>
                                    <Text>{obj.contact}</Text>
                                </View>

                                <Button mode="contained" onPress={() => navigation.navigate('PostJob')}>
                                    Post A Job
                                </Button>

                                <Button mode="contained" onPress={() => console.log('Pressed')}>
                                    Update Profile
                                </Button>

                            </View>

                        </View>
                    )

                })
            }
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
        marginTop: 5,
    },

});

export default CompProfile;
