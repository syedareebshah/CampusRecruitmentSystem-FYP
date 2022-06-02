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
import Icon from 'react-native-vector-icons/Entypo/';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { isPlainObject } from 'immer/dist/internal';
import { ActivityIndicator } from "react-native-paper";


const Applications = (navigation) => {

    const [displayJobs, setDisplay] = useState([])
    console.log(displayJobs);
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
                    let id = documentSnapshot.ref._documentPath._parts[1]
                    tempArray.push({ ...documentSnapshot.data(), ids: documentSnapshot.ref._documentPath._parts[1] })
                });
                setDisplay(tempArray)
                // console.log(tempArray)

            })
    }
    const report = (obj) => {
        console.log(obj);
        firestore()
            .collection('ReportedStud')
            .add({
                name: obj.Name,
                fname: obj.Fname,
                gander: obj.Gander,
                dob: obj.Dob,
                level: obj.Level,
                degree: obj.Degree,
                cgpa: obj.Cgpa,
                skill: obj.Skills,
                contact: obj.Contact,
                email: obj.Email,
                delid:obj.ids

            })
            .then(() => {
                alert("Reported to Admin");
            });

    }

    if (displayJobs.length == 0) {
        return (
            <View style={styles.loading}>
                <ActivityIndicator />
                <Text>May be you have no Applicants yet</Text>
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
                                <Text>Name: {obj.Name}</Text>
                                <Text>FAther's Name: {obj.Fname}</Text>
                                <Text>Gander: {obj.Gander}</Text>
                                <Text>DOB: {obj.Dob}</Text>
                                <Text>Qualification: {obj.Level} {obj.Degree}</Text>
                                <Text>CGPA: {obj.Cgpa}</Text>
                                <Text>Skills: {obj.Skills}</Text>
                                <Text>Contact: {obj.Contact}</Text>
                                <Text>Email: {obj.Email}</Text>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => { report(obj) }}>
                                    <Icon style={{ marginTop: 15 }} name="flag" size={30} />
                                    <Text>Report</Text>
                                </TouchableOpacity>
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
    },
    loading:{
        alignSelf:'center',
        marginTop:20,
    }
})

export default Applications