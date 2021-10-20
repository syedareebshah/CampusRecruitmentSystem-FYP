import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from "react-native"

const Tab = () => {
    const [state, setState] = useState(true)
    useEffect(()=>{
        console.log(state)
    },[state])
    return (
        <View style={styles.main}>
            <TouchableOpacity onPress={() => {
                setState(false)
            }}>
                <Text style={{ color: 'white' }}>Jobs</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                setState(true)
            }}>

                <Text style={{ color: 'white' }}>Profile</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: 'blue',
        padding: 15,
        width:'100%'
    }
})

export default Tab