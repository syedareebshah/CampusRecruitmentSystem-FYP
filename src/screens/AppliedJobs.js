import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Image,
    View,
    Text,
    ScrollView,
    TouchableOpacity
} from "react-native"
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'
import { ActivityIndicator } from "react-native-paper";


const AppliedJobs = ({ props }) => {

    const [displayJobs, setDisplay] = useState([])
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

    console.log(typeof (userid));



    const getData = (userdata) => {
        let tempArray = []

        firestore()
            .collection('AppliedJobs')
            .where('studId', '==', `${userdata}`)
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    tempArray.push(documentSnapshot.data())
                });
                setDisplay(tempArray)
                // console.log(tempArray)

            })
    }

    if (displayJobs.length == 0) {
        return (
            <View style={styles.loading}>
                <ActivityIndicator />
                <Text>May be you have not applied any job yet</Text>
            </View>

        )
    }


    return (
        <ScrollView>
            {
                displayJobs &&
                displayJobs.map((obj, i) => {
                    return (
                        <TouchableOpacity key={i} activeOpacity={0.8} style={styles.card}>
                            <View>
                                <Image style={styles.logo} source={require('./../assets/logo.png')} />
                            </View>
                            <View style={styles.info}>
                                <Text>{obj.title}</Text>
                                <Text>{obj.Workplace} {obj.jobType}</Text>
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
        marginLeft: 8
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
    },
    loading:{
        alignSelf:'center',
        marginTop:20,
    }
})

export default AppliedJobs