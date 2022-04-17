// Example of File Picker in React Native
// https://aboutreact.com/file-picker-in-react-native/

// Import React
import React, { useState } from 'react';
// Import required components
import {
    Button,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome/';


import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Image,
    Alert
} from 'react-native';

// Import Document Picker
import DocumentPicker from 'react-native-document-picker';

const FilePick = ({ navigation }) => {
    const [singleFile, setSingleFile] = useState('');
    const [fname, setFname] = useState();

    console.log(singleFile);

    const selectOneFile = async () => {
        //Opening Document Picker for selection of one file
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.pdf, DocumentPicker.types.docx],

            });

            //Printing the log realted to the file
            console.log('res : ' + JSON.stringify(res));
            console.log('URI : ' + res.uri);
            console.log('Type : ' + res.type);
            console.log('File Name : ' + res.name);
            console.log('File Size : ' + res.size);
            //Setting the state to show single file attributes
            setSingleFile(res);
            setFname(res[0].name) //displaying file name under button
        } catch (err) {
            //Handling any exception (If any)
            if (DocumentPicker.isCancel(err)) {
                //If user canceled the document selection
                Alert.alert('No File Selected');
            } else {
                //For Unknown Error
                alert('Unknown Error: ' + JSON.stringify(err));
                throw err;
            }
        }
    };


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={styles.container}>
                    {/*To show single file attribute*/}
                    <Icon style={styles.icons} name="file-text" size={100} />
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={styles.buttonStyle}
                        onPress={selectOneFile}>
                        {/*Single file selection button*/}
                        <Text style={{ marginRight: 10, fontSize: 19, color:'blue' }}>
                            Upload CV/Resume
                        </Text>
                        <Image
                            source={{
                                uri: 'https://img.icons8.com/offices/40/000000/attach.png',
                            }}
                            style={styles.imageIconStyle}
                        />
                    </TouchableOpacity>
                    <View>
                        <Text>*{fname} </Text>
                    </View>
                    <Button style={{ marginTop: 20, padding: 5}} mode='contained'
                    onPress={()=>{
                        if (singleFile === "" || singleFile === undefined || singleFile === null) {
                            Alert.alert("Please Select CV/Resume")
                            // setPickerError(true);
                            // setTimeout(() => {
                            //     setPickerError(false);
                            // }, 5000)

                        }
                        
                        else {

                            navigation.navigate('Home')
                        }
                    }}
                    >
                        Next
                    </Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default FilePick;

const styles = StyleSheet.create({
    icons:{
        color: 'blue',
        alignSelf:'center',
        marginBottom:25
    },
    container: {
        flex: 1,
        marginTop: 50,
        margin: 20,
    },


    buttonStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        // backgroundColor: '#639958',
        borderWidth:1,
        borderColor:'blue',
        color:'blue',
        padding: 8,
        borderRadius: 5
    },
    imageIconStyle: {
        height: 20,
        width: 20,
        resizeMode: 'stretch',
    },
});