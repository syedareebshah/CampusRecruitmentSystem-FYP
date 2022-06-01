import React, { useState, useEffect } from 'react';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Entypo/';
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux'
import { StudFlag, CompFlag } from '../redux/loginSlice'

import {
    StyleSheet,
    Image,
    Text,
    View,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import {
    launchCamera,
    launchImageLibrary
} from 'react-native-image-picker';


const StudentProfileForComp = (props) => {
    const [filePath, setFilePath] = useState();
    // const { obj } = route.params
    
    console.log(obj,"...");

    const flag = useSelector(CompFlag)
    const delFlag = flag.payload.login.compLogin
    console.log(delFlag);

    const [display, setDisplay] = useState()
    console.log(display, "...");



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
            .collection('Students')
            .where('studId', '==', `${userdata}`)
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    tempArray.push(documentSnapshot.data())
                });
                setDisplay(tempArray)

            })

    }

    const chooseFile = (type) => {
        let options = {
            mediaType: type,
            maxWidth: 300,
            maxHeight: 550,
            quality: 1,
        };
        launchImageLibrary(options, (response) => {
            console.log(response.assets[0].uri);

            if (response.didCancel) {
                alert('User cancelled camera picker');
                return;
            } else if (response.errorCode == 'camera_unavailable') {
                alert('Camera not available on device');
                return;
            } else if (response.errorCode == 'permission') {
                alert('Permission not satisfied');
                return;
            } else if (response.errorCode == 'others') {
                alert(response.errorMessage);
                return;
            }
            console.log('base64 -> ', response.base64);
            console.log('uri -> ', response.uri);
            console.log('width -> ', response.width);
            console.log('height -> ', response.height);
            console.log('fileSize -> ', response.fileSize);
            console.log('type -> ', response.type);
            console.log('fileName -> ', response.fileName);
            setFilePath(response.assets[0].uri);
        });
    };

    return (
        <ScrollView>
            <View key={i} style={{ padding: 40 }}>

                <View style={styles.firstView}>


                    {!filePath &&
                        <Image
                            source={require('../assets/profile.jpg')}
                            style={styles.imageStyle}
                        />
                    }
                    {
                        filePath &&
                        <Image
                            source={{ uri: `${filePath}` }}
                            style={styles.imageStyle}
                        />
                    }
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={styles.buttonStyle}
                        onPress={() => chooseFile('photo')}>
                        <Text style={styles.textStyle}>Upload/Change Picture</Text>
                    </TouchableOpacity>


                </View>
                <View style={styles.ScndView}>
                    <View style={styles.items}>
                        <Text style={styles.label}>Name</Text>
                        <Text>{obj.name}</Text>
                    </View>

                    <View style={styles.items}>
                        <Text style={styles.label}>Father Name</Text>
                        <Text>{obj.fname}</Text>
                    </View>

                    <View style={styles.items}>
                        <Text style={styles.label}>Date of Birth</Text>
                        <Text>{obj.Dob}</Text>
                    </View>

                    <View style={styles.items}>
                        <Text style={styles.label}>Contact</Text>
                        <Text>{obj.contact}</Text>
                    </View>

                    <View style={styles.items}>
                        <Text style={styles.label}>Email</Text>
                        <Text>{obj.email}</Text>
                    </View>

                    <View style={styles.items}>
                        <Text style={styles.label}>Gander</Text>
                        <Text>{obj.gander}</Text>
                    </View>

                    <View style={styles.items}>
                        <Text style={styles.label}>Degree</Text>
                        <Text>{obj.level} {obj.degree}</Text>
                    </View>

                    <View style={styles.items}>
                        <Text style={styles.label}>CGPA</Text>
                        <Text>{obj.cgps}</Text>
                    </View>

                    <View style={styles.items}>
                        <Text style={styles.label}>Skill</Text>
                        <Text>{obj.skill}</Text>
                    </View>

                    {/* <View style={styles.items}>
<Text style={styles.label}>CV</Text>
<Text>Resume.pdf</Text>
</View> */}

                    <Button style={{ marginTop: 20, padding: 10 }} mode="contained" onPress={() => console.log('Pressed')}>
                        Update Profile
                    </Button>
                    {
                        delFlag ?
                            <TouchableOpacity onPress={report}>
                                <Icon style={{ marginTop: 15 }} name="flag" size={30} />
                                <Text>Report</Text>
                            </TouchableOpacity>
                            :
                            null

                    }


                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        marginBottom: 40,
        alignSelf: 'center',
        resizeMode: 'cover',
        height: 150,
        width: 150,
        borderRadius: 500
    },
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
        borderRadius: 500
    },
    label: {
        fontWeight: 'bold',
        marginRight: 40,
        marginBottom: 5,
        marginTop: 5
    },
    textStyle: {
        color: 'blue',
        textAlign: 'center',
    },

});

export default StudentProfileForComp;
