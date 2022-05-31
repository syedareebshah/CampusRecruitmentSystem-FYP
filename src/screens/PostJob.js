import React from 'react';
import { TextInput, Button } from 'react-native-paper';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Select, CheckIcon } from "native-base";
import firestore from '@react-native-firebase/firestore';

import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native';


const PostJob = ({ navigation }) => {
    const [checked, setChecked] = React.useState('first');
    const [Workplace, setWorkplace] = React.useState();
    const [jType, setjType] = React.useState();


    const ValidationSchema = yup.object().shape({
        Description: yup.string().required(),
        Title: yup.string().required(),
    });
    const uId = new Date().getTime().toString()



    return (
        <Formik
            initialValues={{ Description: '', Title: '' }}
            onSubmit={(values) => { 
                firestore()
                    .collection('Jobs')
                    .add({
                        title: values.Title,
                        uId: uId,
                        jobType: jType,
                        Workplace:Workplace
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
