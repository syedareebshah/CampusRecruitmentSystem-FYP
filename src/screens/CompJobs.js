import React, { useEffect, useState } from "react";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'
import {
    StyleSheet,
    Image,
    View,
    Text,
    ScrollView,
    TouchableOpacity
} from "react-native"

const CompJobs = ({ props }) => {

    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
    const [userid, setUserid] = useState();
    let [results, setResult] = useState([])
    console.log(results);

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
            .collection('Jobs')
            // Filter results
            .where('compId', '==', `${userdata}`)
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    tempArray.push(documentSnapshot.data())
                });
                setResult(tempArray)
                // console.log(tempArray,"...");



            });
    }


    return (
        <ScrollView>
            {
                results &&
                results.map((obj,i) => {
                    return (
                        <TouchableOpacity key={i} onPress={() => { props.navigate('JobApply') }} activeOpacity={0.8} style={styles.card}>
                            <View>
                                <Image style={styles.logo} source={require('./../assets/logo.png')} />
                            </View>
                            <View style={styles.info}>
                                <Text>{obj.title}</Text>
                                <Text>{obj.Workplace} {obj.jobType}</Text>
                                <Text>{obj.Address}</Text>
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

export default CompJobs