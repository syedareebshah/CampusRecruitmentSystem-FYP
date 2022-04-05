import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import {
    TextInput,
    Button,
    RadioButton,
} from 'react-native-paper';
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native'

const CompDetails = ({ navigation }) => {


    const ValidationSchema = yup.object().shape({
        Name: yup.string().required(),
        email: yup.string().email().required("Enter a valid email address"),
        About: yup.string().required(),
        Address: yup.string().required(),
        Field: yup.string().required(),
        Contact: yup.number().required().min(13).max(13),
    });


    return (
        <Formik
            initialValues={{ Name: '', email: '', Address: '', Field: '', About: '', Contact: '' }}
            onSubmit={values => console.log(values)}
            validationSchema={ValidationSchema}
        >
            {({ handleChange, handleBlur, handleSubmit, errors, isValid, touched, values }) => (

                <ScrollView>
                    <View style={styles.main}>
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
                            style={{ marginTop: 30, padding: 10 }} mode="contained" onPress={() => navigation.navigate('PostJob')}>
                            submit
                        </Button>

                    </View>
                </ScrollView>
            )}
        </Formik>
    )
}

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
    }


});


export default CompDetails