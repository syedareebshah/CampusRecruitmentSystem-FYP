import React, { useState,useEffect } from 'react';
import firestore from '@react-native-firebase/firestore'
import Icon from 'react-native-vector-icons/Entypo/';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-paper';
import { Select, CheckIcon } from "native-base";

import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from 'react-native';


const JobApply = ({ route,navigation }) => {
    const {id} = route.params
    let [results, setResult] = useState([])
    console.log(results);
    useEffect(() => {
        getData()
    }, [])

    const getData = () =>{
        firestore()
            .collection('Jobs')
            // Filter results
            .where('uId', '==', `${id}`)
            .get()
            .then(querySnapshot => {
               let result= querySnapshot.docs[0]._data
               setResult(result)     
            });
    }
    return (
        <ScrollView>
            <View style={styles.main}>
                <View style={styles.headingBox}>
                    <Text style={styles.heading}>{results.title}</Text>
                </View>
                <View>
                    <View style={styles.container}>
                        <Icon style={styles.icons} name="location-pin" size={30} />
                        <TouchableOpacity onPress={() =>navigation.navigate('PostJob')}>
                        <Text style={{ marginTop: 7 }}>Bellatrix Technologies</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.container}>
                        <Ionicon style={styles.icons} name="time-sharp" size={30} />
                        <Text style={{ marginTop: 7 }}>Remote</Text>
                    </View>
                    <View style={styles.container}>
                        <Icon style={styles.icons} name="briefcase" size={30} />
                        <Text style={{ marginTop: 7 }}> Full Time</Text>
                    </View>

                </View>

                <View style={styles.desBox}>
                    <Text>I would recomend to start by removing the initial values to a constant. Then you need to access the formik's error object. I have not d this using the new hook syntax, however, looking at the docs I would expect "formik.errors" to work (this is exposed in formProps.errors using render props). Finally the submit buttion disabled should be a check that either formik.values is equal to the initial values OR the errors object is not empty.</Text>
                </View>
                <View style={styles.containerBtn}>
                    <Button
                        style={{ marginTop: 20, padding: 10 }} mode="contained" >
                        Apply
                    </Button>
                   
                </View>
                <TouchableOpacity style={styles.container}>
                    <Icon style={styles.icons} name="flag" size={30} />
                    <Text style={{ marginTop: 7,textDecorationLine:'underline' }}>Report</Text>
                </TouchableOpacity>


            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    txtfield: {
        marginTop: 20
    },
    main: {
        padding: 20,
        marginBottom: 30,
    },
    male: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    gander: {
        marginTop: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'

    },
    err: {
        fontSize: 14,
        color: 'red',
        marginTop: 4
    },
    txtfield: {
        marginTop: 20,
    },
    heading: {
        fontSize: 20,
        color: 'white',
        padding: 10
    },
    headingBox: {
        backgroundColor: 'gray',
        borderRadius: 5
    },
    desBox: {
        backgroundColor: 'white',
        marginTop: 10,
        borderRadius: 5,
        padding: 10

    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignSelf:'center',
        marginTop:5
    },
    icons: {
        color: 'brown'
    },
    containerBtn: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }

});

export default JobApply;
