import React, { useEffect, useState } from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Formik } from 'formik';
import * as yup from 'yup';
import { Select, CheckIcon, FormControl, WarningOutlineIcon, ErrorMessage } from "native-base";

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
} from 'react-native'

const StudentDetails = ({ navigation }) => {
    const [checked, setChecked] = useState('first');
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    let [service, setService] = useState("");
    let [degree, setDegree] = useState("");
    let [isok, setok] = useState();

    console.log(checked);


    function xyz(date) {
        setok(isok + 1)
        console.log("hahaha", isok)
        if (!date) {
            console.log("gagag")
        }
        else (
            date
        )
    }






    const ValidationSchema = yup.object().shape({
        name: yup.string().required(),
        fname: yup.string().required("father name is a required field"),
        Contact: yup.number().required().min(13).max(13),
        Email: yup.string().email().required(),
        Cgpa: yup.number().required(),
    });

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.log("A date has been picked: ", date);
        hideDatePicker();
        setok(date.toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" }))
    };

    const DOB = JSON.stringify(isok)



    return (
        <Formik
            initialValues={{ name: '', DOB: '', fname: '', Contact: '', Email: '', skills: '', Cgpa: '', degree: ''}}
            onSubmit={values => console.log(values)}
            validationSchema={ValidationSchema}
        >
            {({ handleChange, handleBlur, handleSubmit, errors, isValid, touched, values }) => (
                <ScrollView>
                    <View style={styles.main}>

                        <TextInput style={styles.txtfield}
                            label="Name"
                            mode='outlined'
                            onChangeText={handleChange('name')}
                            onBlur={handleBlur('name')}
                            value={values.name}
                        />
                        {(errors.name && touched.name) &&
                            <Text style={styles.err}>{errors.name}</Text>
                        }
                        <TextInput style={styles.txtfield}
                            label="Father Name"
                            mode='outlined'
                            onChangeText={handleChange('fname')}
                            onBlur={handleBlur('fname')}
                            value={values.fname}
                        />
                        {(errors.fname && touched.fname) &&
                            <Text style={styles.err}>{errors.fname}</Text>
                        }

                        <Text
                            style={styles.dob}>{DOB}
                        </Text>
                        {(errors.DOB && touched.DOB) &&
                            <Text style={styles.err}>{errors.DOB}</Text>
                        }

                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="date"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                        />

                        <Button style={{ marginTop: 20, padding: 5 }} mode='outlined' onPress={showDatePicker} >
                            Date of Birth
                        </Button>

                        <TextInput style={styles.txtfield}
                            label="Contact"
                            placeholder="+923000000000"
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
                            onChangeText={handleChange('Email')}
                            onBlur={handleBlur('Email')}
                            value={values.Email}
                        />
                        {(errors.Email && touched.Email) &&
                            <Text style={styles.err}>{errors.Email}</Text>
                        }

                        <View style={styles.gander}>
                            <Text style={{ marginTop: 9 }}>Gander</Text>
                            <View style={styles.male}>
                                <RadioButton
                                    
                                    title="thisss"
                                    value="first"
                                    status={checked === 'first' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('male')}
                                />
                                <Text style={{ marginTop: 9 }}>
                                    Male
                                </Text>
                            </View>
                            <View style={styles.male}>
                                <RadioButton
                                    
                                    value="second"
                                    status={checked === 'second' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('female')}
                                />
                                <Text style={{ marginTop: 9 }}>
                                    Female
                                </Text>
                            </View>
                            {(errors.gender && touched.gender) &&
                                <Text style={styles.err}>{errors.gender}</Text>
                            }
                        </View>
                        <TextInput style={styles.txtfield}
                            label="Skills"
                            placeholder='Optional'
                            mode='outlined'
                            multiline={true}
                            numberOfLines={5}
                        />
                        <TextInput style={styles.txtfield}
                            label="CGPA"
                            mode='outlined'
                            keyboardType="decimal-pad"
                            maxLength={4}
                            onChangeText={handleChange('Cgpa')}
                            onBlur={handleBlur('Cgpa')}
                            value={values.Cgpa}
                        />
                        {(errors.Cgpa && touched.Cgpa) &&
                            <Text style={styles.err}>{errors.Cgpa}</Text>
                        }

                        <Select selectedValue={service} minWidth="200" accessibilityLabel="Choose Level" placeholder="Choose Level" _selectedItem={{
                            bg: "teal.600",
                            endIcon: <CheckIcon size="5" />
                        }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                            <Select.Item label="BS" value="BS" />
                            <Select.Item label="MS" value="MS" />

                        </Select>


                        <Select selectedValue={degree} minWidth="200" accessibilityLabel="Choose Level" placeholder="Choose Degree" _selectedItem={{
                            bg: "teal.600",
                            endIcon: <CheckIcon size="5" />
                        }} mt={1} onValueChange={itemValue => setDegree(itemValue)}>
                            <Select.Item label="BS" value="BS" />
                            <Select.Item label="MS" value="MS" />

                        </Select>


                        <TextInput style={styles.txtfield}
                            label="CV"
                            mode='outlined'
                        />

                        <Button
                            style={{ marginTop: 30, padding: 10 }} mode="contained" onPress={() => { navigation.navigate('Home') }}>
                            Next
                        </Button>


                    </View>
                </ScrollView>
            )}
        </Formik>
    )
}

const styles = StyleSheet.create({
    txtfield: {
        marginTop: 20,
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
    dob: {
        fontSize: 20,
        marginTop: 20,
        textAlign: 'center',
    }


});


export default StudentDetails