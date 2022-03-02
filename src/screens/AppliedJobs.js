import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from "react-native"

const AppliedJob = () => {
    
    return (
        <View style={styles.main}>
            <Text>Applied Jobs</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 15,
        width:'100%'
    }
})

export default AppliedJob