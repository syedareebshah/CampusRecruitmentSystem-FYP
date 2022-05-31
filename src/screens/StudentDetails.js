import React, { useEffect, useState } from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Formik } from 'formik';
import * as yup from 'yup';
import { Select, CheckIcon } from "native-base";
import firestore from '@react-native-firebase/firestore';
import Ionicon from 'react-native-vector-icons/Ionicons';


import {
    TextInput,
    Button,
    RadioButton
} from 'react-native-paper';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Alert,
} from 'react-native'
import FilePick from './FilePick';

const StudentDetails = ({ navigation }) => {
    const [degrees, setDegrees] = useState(["Computer Science", "Physics"])
    const [checked, setChecked] = useState('Male');
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    let [level, setlevel] = useState("");
    let [skills, setSkills] = useState("");
    let [degree, setDegree] = useState("");
    let [isok, setok] = useState('DD/MM/YY');
    let [pickerError, setPickerError] = useState(false)

    console.log(checked);
    console.log(degree, level);




    const ValidationSchema = yup.object().shape({
        name: yup.string().required(),
        fname: yup.string().required("father name is a required field"),
        Contact: yup.number().required(),
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

    function CustomValidation() {

        if (!isok) {
            console.log("empty")
        }
        else {
            console.log("hah", isok);
        }
    }


    // const tempFun = (values) => {
    //     values.Dob = isok
    //     values.gander = checked
    // }

    return (
        <Formik
            initialValues={{ name: '', Dob: '', gander: '', fname: '', Contact: '', Email: '', Cgpa: '', degree: '' }}
            onSubmit={(values) => {
                values.Dob = isok
                values.gander = checked
                const uId = new Date().getTime().toString()


                firestore()
                    .collection('Students')
                    .add({
                        name: values.name,
                        Dob: values.Dob,
                        fname: values.fname,
                        contact: values.Contact,
                        email: values.Email,
                        skill: skills,
                        cgps: values.Cgpa,
                        degree: degree,
                        gander: values.gander,
                        level: level,
                        uId: uId
                    })
                    .then(() => {
                        alert("Student Added")
                    });
            }

            }
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




                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="date"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                        />
                        <Text
                            style={styles.dob}>{DOB}
                        </Text>

                        <Button style={{ marginTop: 20, padding: 5, borderColor: 'gray', borderWidth: 1 }} mode='outlined' onPress={showDatePicker} >
                            Date of Birth
                        </Button>
                        {pickerError && <Text style={{ color: "red" }}>please choose DOB</Text>}


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
                                    uncheckedicon='circle-o'
                                    value={values.gander}
                                    status={checked === 'Male' ? 'checked' : 'unchecked'} //condition me first nhi 'male' ay ga
                                    color='blue'
                                    onPress={() => setChecked("Male")}
                                />
                                <Text style={{ marginTop: 9 }}>
                                    Male
                                </Text>
                            </View>
                            <View style={styles.male}>
                                <RadioButton
                                    value={values.gander}
                                    checked='female'
                                    CheckIcon='dot-circle-o'
                                    uncheckedicon='circle-o'
                                    color='blue'
                                    status={checked === 'female' ? 'checked' : 'unchecked'}
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
                            value={skills}
                            onChangeText={(val)=>{setSkills(val)}}



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
                        <View style={styles.education}>
                            <Select selectedValue={level} minWidth="200" accessibilityLabel="Choose Level" placeholder="Choose Level" _selectedItem={{
                                bg: "teal.600",
                                endIcon: <CheckIcon size="5" />
                            }} mt={1} onValueChange={itemValue => setlevel(itemValue)}>
                                <Select.Item label="BS" value="BS" />
                                <Select.Item label="MS" value="MS" />
                                <Select.Item label="PhD" value="PhD" />
                            </Select>


                            <Select selectedValue={degree} minWidth="200" accessibilityLabel="Choose Level" placeholder="Choose Degree" _selectedItem={{
                                bg: "teal.600",
                                endIcon: <CheckIcon size="5" />
                            }} mt={1} onValueChange={itemValue => setDegree(itemValue)}>
                                {
                                    degrees.map((obj, id) => {
                                        return (
                                            <Select.Item key={id} label={obj} value={obj} />
                                        )
                                    })
                                }
                            </Select>
                        </View>
                        {degree === "" || level === "" && <Text>This is null</Text>}


                        <Button
                            disabled={!isValid}
                            style={{ marginTop: 30, padding: 10 }} mode="contained" onPress={() => {
                                // handleSubmit()
                                if (isok === "DD/MM/YY" || isok === undefined || isok === null) {
                                    // alert("please Enter Date")
                                    setPickerError(true);
                                    setTimeout(() => {
                                        setPickerError(false);
                                    }, 5000)
                                }
                                else if (degree === '' || level === '') {
                                    Alert.alert("Degree Of Level is Empty")
                                }

                                else {
                                    navigation.navigate('Resume')
                                }
                            }
                            }>
                            Next
                        </Button>


                    </View>
                </ScrollView>
            )}
        </Formik>
    )
}

const styles = StyleSheet.create({
    education: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 20,
        padding: 20
    },
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
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 3,
        fontSize: 20,
        marginTop: 20,
        textAlign: 'center',

    }


});


export default StudentDetails