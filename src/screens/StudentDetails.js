import React, { useState } from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";

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

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.log("A date has been picked: ", date);
        hideDatePicker();
    };


    return (
        <ScrollView>
            <View style={styles.main}>

                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
                <TextInput style={styles.txtfield}
                    label="Name"
                    mode='outlined'
                />
                <TextInput style={styles.txtfield}
                    label="Father Name"
                    mode='outlined'
                />
                {/* <TextInput style={styles.txtfield}
                    label="Date of Birth"
                    mode='outlined'
                /> */}
                <Button style={{ marginTop: 20, padding: 5 }} mode='outlined' onPress={showDatePicker} >
                    Date of Birth
                </Button>

                <TextInput style={styles.txtfield}
                    label="Contact"
                    mode='outlined'
                />
                <TextInput style={styles.txtfield}
                    label="Email"
                    mode='outlined'
                />

                <View style={styles.gander}>
                    <Text style={{ marginTop: 9 }}>Gander</Text>
                    <View style={styles.male}>
                        <RadioButton
                            title="thisss"
                            value="first"
                            status={checked === 'first' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('first')}
                        />
                        <Text style={{ marginTop: 9 }}>
                            Male
                        </Text>
                    </View>
                    <View style={styles.male}>
                        <RadioButton
                            value="second"
                            status={checked === 'second' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('second')}
                        />
                        <Text style={{ marginTop: 9 }}>
                            Female
                        </Text>
                    </View>
                </View>
                <TextInput style={styles.txtfield}
                    label="Skills"
                    mode='outlined'
                    multiline={true}
                    numberOfLines={5}
                />
                <TextInput style={styles.txtfield}
                    label="CGPA"
                    mode='outlined'
                />
                <TextInput style={styles.txtfield}
                    label="Degree"
                    mode='outlined'
                />
                <TextInput style={styles.txtfield}
                    label="CV"
                    mode='outlined'
                />

                <Button style={{ marginTop: 30, padding: 10 }} mode="contained" onPress={() => { navigation.navigate('Home') }}>
                    Next
                </Button>

            </View>
        </ScrollView>
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

    }


});


export default StudentDetails