import React, { useEffect, useState } from "react";
import firestore from '@react-native-firebase/firestore';
import {
    StyleSheet,
    Image,
    View,
    Text,
    ScrollView,
    TouchableOpacity
} from "react-native"

const ReportedStudents = ({ props }) => {
    const [jobs, setJobs] = useState([])
    console.log(jobs);
    useEffect(() => {
        getJobs()
    }, [])

    const getJobs = async () => {
        let tempArray = []
        firestore()
            .collection('Jobs')
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    tempArray.push(documentSnapshot.data())
                });
                setJobs(tempArray)
            });
    }

    return (
        <ScrollView>
            {
                jobs.map((obj, i) => {
                    return (
                        <TouchableOpacity key={i} onPress={() => { props.navigate('JobApply',{id:obj.uId}) }} activeOpacity={0.8} style={styles.card}>
                            <View>
                                <Image style={styles.logo} source={require('./../assets/logo.png')} />
                            </View>
                            <View style={styles.info}>
                                <Text>{obj.title}</Text>
                                <Text>Comp Name</Text>
                                <Text>Location(Remote)</Text>
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
    }
})

export default ReportedStudents