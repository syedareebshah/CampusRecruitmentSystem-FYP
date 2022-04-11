// Example of File Picker in React Native
// https://aboutreact.com/file-picker-in-react-native/

// Import React
import React, { useState } from 'react';
// Import required components
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

const FilePick = () => {
    const [singleFile, setSingleFile] = useState('');
    const [fname, setFname] = useState();

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
            setFname(res[0].name)
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
  
            <View style={styles.container}>
                {/*To show single file attribute*/}
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.buttonStyle}
                    onPress={selectOneFile}>
                    {/*Single file selection button*/}
                    <Text style={{ marginRight: 10, fontSize: 19 }}>
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
            </View>
        </SafeAreaView>
    );
};

export default FilePick;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:20
    },
    
    
    buttonStyle: {
        flexDirection: 'row',
        justifyContent:'center',
        backgroundColor: '#639958',
        padding: 8,
        borderRadius:5
    },
    imageIconStyle: {
        height: 20,
        width: 20,
        resizeMode: 'stretch',
    },
});