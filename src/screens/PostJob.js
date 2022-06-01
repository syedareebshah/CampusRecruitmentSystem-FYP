import React, { useEffect, useState } from 'react';
import { TextInput, Button } from 'react-native-paper';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Select, CheckIcon } from "native-base";
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';


import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native';


const PostJob = ({ navigation }) => {
    const [checked, setChecked] = useState('first');
    const [Workplace, setWorkplace] = useState();
    const [jType, setjType] = useState();

    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
    const [userid, setUserid] = useState();
    const [myJobs, setMyJobs] = useState([{}])
    console.log(myJobs);

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
        getJobs()

        return subscriber; // unsubscribe on unmount
    }, [user]);


    const ValidationSchema = yup.object().shape({
        Description: yup.string().required(),
        Title: yup.string().required(),
        Address: yup.string().required(),
    });
    const uId = new Date().getTime().toString()

    const getJobs = async () => {
        let tempArray = []
        try{
            firestore()
            .collection('Company')
            .doc(`${userid}`)
            .get()
            .then(querySnapshot => {
                console.log(querySnapshot);
            });
        }
        catch(err){
            console.log(err);
        }
        







                // setInterval(() => {
                //     let result = querySnapshot._data
                //     console.log(result);

                //     console.log(result?.jobs);
                // }, 1000)






    }



    return (
        <Formik
            initialValues={{ Description: '', Title: '', Address:'' }}
            onSubmit={(values) => {
                firestore()
                    .collection('Jobs')
                    .add({
                        title: values.Title,
                        desc: values.Description,
                        compId: userid,
                        jobType: jType,
                        Workplace: Workplace,
                        Address: values.Address
                    })
                    .then(() => {
                        alert("Job Posted")
                    });
                
            }}
            validationSchema={ValidationSchema}
        >
            {({ handleChange, handleBlur, handleSubmit, errors, isValid, touched, values }) => (
                <ScrollView>
                    <View style={styles.main}>
                        <TextInput
                            label="Title"
                            mode='outlined'
                            onChangeText={handleChange('Title')}
                            onBlur={handleBlur('Title')}
                            value={values.Title}
                        />
                        {(errors.Title && touched.Title) &&
                            <Text style={styles.err}>{errors.Title}</Text>
                        }

                    <TextInput
                            label="Address"
                            mode='outlined'
                            onChangeText={handleChange('Address')}
                            onBlur={handleBlur('Address')}
                            value={values.Address}
                        />
                        {(errors.Address && touched.Address) &&
                            <Text style={styles.err}>{errors.Address}</Text>
                        }

                        <TextInput
                            style={styles.txtfield}
                            multiline={true}
                            numberOfLines={5}
                            label="Description"
                            mode='outlined'
                            onChangeText={handleChange('Description')}
                            onBlur={handleBlur('Description')}
                            value={values.Description}
                        />
                        {(errors.Description && touched.Description) &&
                            <Text style={styles.err}>{errors.Description}</Text>
                        }

                        <Select selectedValue={Workplace} minWidth="200" accessibilityLabel="Workplace Type" placeholder="Workplace Type" _selectedItem={{
                            bg: "teal.600",
                            endIcon: <CheckIcon size="5" />
                        }} mt={1} onValueChange={itemValue => setWorkplace(itemValue)}>
                            <Select.Item label="Full Time" value="Full Time" />
                            <Select.Item label="Remote" value="remote" />
                            <Select.Item label="Hybrid" value="Hybrid" />

                        </Select>

                        <Select selectedValue={jType} minWidth="200" accessibilityLabel="Job Type" placeholder="Job Type" _selectedItem={{
                            bg: "teal.600",
                            endIcon: <CheckIcon size="5" />
                        }} mt={1} onValueChange={itemValue => setjType(itemValue)}>
                            <Select.Item label="Job" value="Job" />
                            <Select.Item label="internship" value="internship" />
                        </Select>
                        <Button onPress={handleSubmit}
                            disabled={!isValid}
                            style={{ marginTop: 20, padding: 10 }} mode="contained" >
                            Post
                        </Button>
                    </View>
                </ScrollView>
            )
            }
        </Formik >
    );
};

const styles = StyleSheet.create({
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
    },
    txtfield: {
        marginTop: 20,
    },

});

export default PostJob;
