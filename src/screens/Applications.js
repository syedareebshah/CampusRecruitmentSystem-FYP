import React, { useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';
import {
    StyleSheet,
    Image,
    View,
    Text,
    ScrollView,
    TouchableOpacity
} from "react-native"
import auth from '@react-native-firebase/auth';

const Applications = (props) => {

    const [displayJobs, setDisplay] = useState()
    console.log(displayJobs, "///");

    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
    const [userid, setUserid] = useState();

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
            .collection('Applicants')
            .where('id', '==', `${userdata}`)
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    tempArray.push(documentSnapshot.data())
                });
                setDisplay(tempArray)
                // console.log(tempArray)

            })
    }




    return (
        <ScrollView>
            {
                displayJobs &&
                displayJobs.map((obj, i) => {
                    return (
                        <TouchableOpacity key={i} onPress={() => { props.navigate('StudentProfileForComp') }} activeOpacity={0.8} style={styles.card}>
                            <View>
                                <Image style={styles.logo} source={require('./../assets/logo.png')} />
                            </View>
                            <View style={styles.info}>
                                <Text>{obj.Name}</Text>
                                <Text>{obj.Level} {obj.Degree}</Text>
                            </View>

                        </TouchableOpacity>
                    )

                })
            }
        </ScrollView>
    )
}



const styles = StyleSheet.create({
    info: {
        marginLeft: 8,
        marginTop: 10
    },
    card: {
        borderRadius: 7,
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 5,
        marginRight: 10,
        marginLeft: 10,
        padding: 10,
        fontSize: 24,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
        backgroundColor: 'white'
    },
    logo: {
        // marginBottom: 40,
        alignSelf: 'flex-start',
        resizeMode: 'contain',
        height: 65,
        width: 65,
    }
})

export default Applications