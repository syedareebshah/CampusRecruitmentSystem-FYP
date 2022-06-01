import React, { useEffect, useState } from "react";
import firestore from '@react-native-firebase/firestore';
import Delicon from 'react-native-vector-icons/AntDesign';

import {
    StyleSheet,
    Image,
    View,
    Text,
    ScrollView,
    TouchableOpacity
} from "react-native"

const ReportedJobs = ({ props }) => {
    const [jobs, setJobs] = useState([])
    console.log(jobs, "...");
    useEffect(() => {
        getJobs()
    }, [])

    const getJobs = async () => {
        let tempArray = []
        firestore()
            .collection('ReportedJobs')
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    let id = documentSnapshot.ref._documentPath._parts[1]
                    tempArray.push({ ...documentSnapshot.data(), ids: documentSnapshot.ref._documentPath._parts[1] })
                });
                setJobs(tempArray)
            });
    }
    const delJob = (obj) => {
        firestore()
            .collection('Jobs')
            .doc(`${obj.id}`)
            .delete()
            .then(() => {
                delReport(obj)
                console.log('User deleted!');
            });
        console.log(obj, "me");
    }

    const delReport = (obj) => {
        firestore()
            .collection('ReportedJobs')
            .doc(`${obj.ids}`)
            .delete()
            .then(() => {
                console.log('User deleted!......');
                getJobs()
            });
    }

    return (
        <ScrollView>
            {
                jobs.map((obj, i) => {
                    return (
                        <View key={i} activeOpacity={0.8} style={styles.card}>
                            <View style={{ flexDirection: 'row' }}>
                                <View>
                                    <Image style={styles.logo} source={require('./../assets/logo.png')} />
                                </View>
                                <View style={styles.info}>
                                    <Text>{obj.title}</Text>
                                    <Text>{obj.desc}</Text>
                                    <Text>{obj.Worlplace} {obj.jobType}</Text>
                                </View>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => { delJob(obj) }}>
                                    <Delicon style={{ marginTop: 15 }} name="delete" size={30} />
                                </TouchableOpacity>
                            </View>
                        </View>
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
        justifyContent: 'space-between',
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

export default ReportedJobs