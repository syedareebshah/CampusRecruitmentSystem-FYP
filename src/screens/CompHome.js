import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
} from "react-native"
import Applications from "./Applications";
import AppliedJob from "./AppliedJobs";
import CompJobs from "./CompJobs";

import Jobs from "./Jobs";
import StudentProfile from "./StudentProfile";



const CompHome = ({ navigation }) => {
    const [state, setState] = useState(false)
    
        console.log(state)
    

    if (state == true) {
        return (
            <View style={styles.main}>
                <View style={styles.upper}>
                    <ScrollView>
                        <CompJobs props={navigation} />
                    </ScrollView>
                </View>
                <View style={styles.tab}>
                    <TouchableOpacity onPress={() => {
                        setState(false)
                    }}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Applications</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setState(true)
                    }}>

                        <Text style={{ color: 'white', fontWeight: 'bold', textDecorationLine: 'underline' }}>Posted Jobs</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    else {
        return (
            <View style={styles.main}>
                <View style={styles.upper}>
                    <ScrollView>
                         <Applications props={navigation} />
                    </ScrollView>
                </View>
                <View style={styles.tab}>

                    <TouchableOpacity onPress={() => {
                        setState(false)
                    }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', textDecorationLine: 'underline' }}>Applications</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        setState(true)
                    }}>

                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Posted Jobs</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    upper: {
    },
    tab: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: 'blue',
        padding: 25,
        width: '100%',
        position: 'absolute',
        bottom: 0
    },
})

export default CompHome