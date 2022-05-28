import React, { useState } from 'react';
import { Button } from 'react-native-paper';

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


const StudentProfile = ({ navigation }) => {
    const [filePath, setFilePath] = useState();

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
            <View style={{ padding: 40 }}>

                <View style={styles.firstView}>
                    {/* <Image style={styles.logo} source={require('./../assets/profile.jpg')} />
                    <TouchableOpacity>
                        <Text style={{textAlign:'center',marginTop:-20,color:'blue'}}>Upload/Change Picture</Text>
                    </TouchableOpacity> */}

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
                        <Text>Mubeen Khan </Text>
                    </View>

                    <View style={styles.items}>
                        <Text style={styles.label}>Father Name</Text>
                        <Text>M. Wakeel </Text>
                    </View>

                    <View style={styles.items}>
                        <Text style={styles.label}>Date of Birth</Text>
                        <Text>27-Dec-2000 </Text>
                    </View>

                    <View style={styles.items}>
                        <Text style={styles.label}>Contact</Text>
                        <Text>+92 300 0000000</Text>
                    </View>

                    <View style={styles.items}>
                        <Text style={styles.label}>Email</Text>
                        <Text>mubeen@gmail.com</Text>
                    </View>

                    <View style={styles.items}>
                        <Text style={styles.label}>Gander</Text>
                        <Text>Female</Text>
                    </View>

                    <View style={styles.items}>
                        <Text style={styles.label}>Degree</Text>
                        <Text>BS SE</Text>
                    </View>

                    <View style={styles.items}>
                        <Text style={styles.label}>CGPA</Text>
                        <Text>3.5</Text>
                    </View>

                    <View style={styles.items}>
                        <Text style={styles.label}>Skill</Text>
                        <Text>alpha , bravo , carlie</Text>
                    </View>

                    <View style={styles.items}>
                        <Text style={styles.label}>CV</Text>
                        <Text>Resume.pdf</Text>
                    </View>

                    <Button style={{ marginTop: 20, padding: 10 }} mode="contained" onPress={() => console.log('Pressed')}>
                        Update Profile
                    </Button>

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

export default StudentProfile;
