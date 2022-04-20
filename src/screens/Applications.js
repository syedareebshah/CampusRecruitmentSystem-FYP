import React from "react";
import {
    StyleSheet,
    Image,
    View,
    Text,
    ScrollView,
    TouchableOpacity
} from "react-native"

const Applications = ({props}) => {

    return (
        <ScrollView>
            <TouchableOpacity onPress={() => { props.navigate('StudentProfile') }} activeOpacity={0.8} style={styles.card}>
                <View>
                    <Image style={styles.logo} source={require('./../assets/logo.png')} />
                </View>
                <View style={styles.info}>
                    <Text>Applicant Name</Text>
                    <Text>Description</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
    )
}



const styles = StyleSheet.create({
    info: {
        marginLeft: 8,
        marginTop:10
    },
    card: {
        borderRadius: 7,
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 5,
        marginRight: 10,
        marginLeft: 10,
        padding: 10,
        fontSize: 24,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
        backgroundColor: 'white'
    },
    logo: {
        // marginBottom: 40,
        alignSelf: 'flex-start',
        resizeMode: 'contain',
        height: 65,
        width: 65,
    }
})

export default Applications