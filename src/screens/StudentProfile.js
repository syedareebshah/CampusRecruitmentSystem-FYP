import React from 'react';
import { Button } from 'react-native-paper';

import {
    StyleSheet,
    Image,
    Text,
    View,
    ScrollView,
    TouchableOpacity
} from 'react-native';


const StudentProfile = ({ navigation }) => {

    return (
        <ScrollView>
            <View style={{ padding: 40 }}>

                <View style={styles.firstView}>
                        <Image style={styles.logo} source={require('./../assets/profile.jpg')} />
                    <TouchableOpacity>
                        <Text style={{textAlign:'center',marginTop:-20,color:'blue'}}>Upload/Change Picture</Text>
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

});

export default StudentProfile;
