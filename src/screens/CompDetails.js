import React, { useState,useEffect } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import firestore from '@react-native-firebase/firestore';
import Ionicon from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';

import {
    TextInput,
    Button,
    RadioButton,
} from 'react-native-paper';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native'

import {
    launchCamera,
    launchImageLibrary
} from 'react-native-image-picker';



const CompDetails = ({ navigation }) => {

    const [filePath, setFilePath] = useState();
    console.log(filePath);

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
        }

        return subscriber; // unsubscribe on unmount
    }, [user]);


    //img portion

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





    const ValidationSchema = yup.object().shape({
        Name: yup.string().required(),
        email: yup.string().email().required("Enter a valid email address"),
        About: yup.string().required(),
        Address: yup.string().required(),
        Field: yup.string().required(),
        Contact: yup.number().required(),
    });


    return (
        <Formik
            initialValues={{ Name: '', email: '', Address: '', Field: '', About: '', Contact: '' }}
            onSubmit={(values) => {
                firestore()
                    .collection('Company')
                    .doc(`${userid}`)
                    .set({
                        name: values.Name,
                        email:values.email,
                        address: values.Address,
                        field: values.Field,
                        about: values.About,
                        contact: values.Contact,
                        id: userid,
                        jobs:[]
                    })
                    .then(() => {
                        alert("Company Added")
                        navigation.navigate('CompHome')
                    });
            }}
            validationSchema={ValidationSchema}
        >
            {({ handleChange, handleBlur, handleSubmit, errors, isValid, touched, values }) => (

                <ScrollView>
                    <View style={styles.main}>

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

                        <TextInput style={styles.txtfield}
                            label="Name"
                            mode='outlined'
                            onChangeText={handleChange('Name')}
                            onBlur={handleBlur('Name')}
                            value={values.Name}
                        />
                        {(errors.Name && touched.Name) &&
                            <Text style={styles.err}>{errors.Name}</Text>
                        }
                        <TextInput style={styles.txtfield}
                            label="About"
                            mode='outlined'
                            multiline={true}
                            numberOfLines={5}
                            onChangeText={handleChange('About')}
                            onBlur={handleBlur('About')}
                            value={values.About}
                        />
                        {(errors.About && touched.About) &&
                            <Text style={styles.err}>{errors.About}</Text>
                        }
                        <TextInput style={styles.txtfield}
                            label="Address"
                            mode='outlined'
                            onChangeText={handleChange('Address')}
                            onBlur={handleBlur('Address')}
                            value={values.Address}
                        />
                        {(errors.Address && touched.Address) &&
                            <Text style={styles.err}>{errors.Address}</Text>
                        }
                        <TextInput style={styles.txtfield}
                            label="Field"
                            mode='outlined'
                            onChangeText={handleChange('Field')}
                            onBlur={handleBlur('Field')}
                            value={values.Field}
                        />
                        {(errors.Field && touched.Field) &&
                            <Text style={styles.err}>{errors.Field}</Text>
                        }
                        <TextInput style={styles.txtfield}
                            label="Contact"
                            mode='outlined'
                            onChangeText={handleChange('Contact')}
                            onBlur={handleBlur('Contact')}
                            value={values.Contact}
                        />
                        {(errors.Contact && touched.Contact) &&
                            <Text style={styles.err}>{errors.Contact}</Text>
                        }
                        <TextInput style={styles.txtfield}
                            label="Email"
                            mode='outlined'
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                        />
                        {(errors.email && touched.email) &&
                            <Text style={styles.err}>{errors.email}</Text>
                        }
                        <Button
                            disabled={!isValid}
                            style={{ marginTop: 30, padding: 10 }} mode="contained" onPress={() => {
                                if (filePath === "" || filePath === undefined || filePath === null) {
                                    alert("Fill all the details")
                                }
                                else{
                                handleSubmit()
                                }
                            }}>
                            submit
                        </Button>

                    </View>
                </ScrollView>
            )}
        </Formik>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        marginBottom: 40,
        alignSelf: 'center',
        resizeMode: 'cover',
        height: 150,
        width: 150,
        borderRadius: 500
    },
    textStyle: {
        color: 'blue',
        textAlign: 'center',
    },
    txtfield: {
        marginTop: 20
    },
    main: {
        padding: 40,
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
    }


});


export default CompDetails