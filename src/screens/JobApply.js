import React, { useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore'
import Icon from 'react-native-vector-icons/Entypo/';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-paper';
import { Select, CheckIcon } from "native-base";
import { useDispatch, useSelector } from 'react-redux'
import { StudFlag } from '../redux/loginSlice'
import auth from '@react-native-firebase/auth';

import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from 'react-native';


const JobApply = ({ route, navigation }) => {
    const flag = useSelector(StudFlag)
    const delFlag = flag.payload.login.studLogin
    console.log(delFlag, "....");
    const { obj } = route.params
    let [results, setResult] = useState()
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
    const [userid, setUserid] = useState();
    const [userObj, setUserObj] = useState(obj)
    console.log(userObj, "........");
    let [mydata, setMydata] = useState()

    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);
    useEffect(() => {
        if (!user) {
            console.log("not found")
        }
        else {
            setUserid(user.uid)
            getMyData(user.uid)
        }


    }, [user])
    console.log(userid, "yhi to hy");

    const apply = () => {
        firestore()
            .collection('Applicants')
            .add({
                Name: mydata.name,
                Fname: mydata.fname,
                Gander: mydata.gander,
                Contact: mydata.gander,
                Cgpa: mydata.cgps,
                Degree: mydata.degree,
                Dob: mydata.Dob,
                Level: mydata.level,
                Email: mydata.email,
                Skills: mydata.skill,
                id: userObj.compId

            })
            .then(() => {
                console.log("done")
            });

        firestore()
            .collection('AppliedJobs')
            .add({
                title: userObj.title,
                Workplace: userObj.Workplace,
                desc: userObj.desc,
                jobType: userObj.jobType,
                studId: userid


            })
            .then(() => {
                console.log("done")
            });

    }



    const getMyData = (userid) => {
        console.log(userid, "from in");
        firestore()
            .collection('Students')
            .doc(`${userid}`)
            .get()
            .then(documentSnapshot => {
                let res = documentSnapshot._data
                setMydata(res);
            });
    }

    console.log(mydata, ".....");

    // const getData = () => {
    //     firestore()
    //         .collection('Jobs')
    //         .where('jobId', '==', `${id}`)
    //         .get()
    //         .then(querySnapshot => {
    //             let result = querySnapshot.docs[0]._data
    //             setResult(result)
    //         });
    // }
    // console.log(results);
    // useEffect(() => {
    //     getData()
    // }, [])

    // const getData = () => {
    //     firestore()
    //         .collection('Jobs')
    //         // Filter results
    //         .where('uId', '==', `${id}`)
    //         .get()
    //         .then(querySnapshot => {
    //             let result = querySnapshot.docs[0]._data
    //             setResult(result)
    //         });
    // }
    const report = () => {
        firestore()
            .collection('ReportJob')
            .add({
                title: results.title,
                workplace: results.Workplace,
                jobType: results.jobType,
            })
            .then(() => {
                alert("Reported to Admin")
            });
    }
    const applyJob = () => {


    }
    return (
        <ScrollView>
            <View style={styles.main}>
                <View style={styles.headingBox}>
                    <Text style={styles.heading}>{obj.title}</Text>
                </View>
                <View>
                    <View style={styles.container}>
                        <Icon style={styles.icons} name="location-pin" size={30} />
                        <TouchableOpacity onPress={() => navigation.navigate('PostJob')}>
                            <Text style={{ marginTop: 7 }}>{obj.Address}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.container}>
                        <Ionicon style={styles.icons} name="time-sharp" size={30} />
                        <Text style={{ marginTop: 7 }}>{obj.Workplace}</Text>
                    </View>
                    <View style={styles.container}>
                        <Icon style={styles.icons} name="briefcase" size={30} />
                        <Text style={{ marginTop: 7 }}>{obj.jobType}</Text>
                    </View>

                </View>

                <View style={styles.desBox}>
                    <Text>{obj.desc}</Text>
                </View>
                <View style={styles.containerBtn}>
                    <Button
                        onPress={apply}
                        style={{ marginTop: 20, padding: 10 }} mode="contained" >
                        Apply
                    </Button>

                </View>
                {
                    delFlag ?
                        <TouchableOpacity onPress={report} style={styles.container}>
                            <Icon style={styles.icons} name="flag" size={30} />
                            <Text style={{ marginTop: 7, textDecorationLine: 'underline' }}>Report</Text>
                        </TouchableOpacity>
                        :
                        null

                }



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
        marginTop: 5
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
