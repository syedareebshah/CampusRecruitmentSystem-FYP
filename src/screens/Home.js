import React , {useEffect,useState} from "react";
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
} from "react-native"
import CompProfile from "./ComProfile";
import StudentProfile from "./StudentProfile";

const Home = () => {
    const [state, setState] = useState(true)
    useEffect(()=>{
        console.log(state)
    },[state])

    if(state==true){
        return (
            <View style={styles.main}>
                <View style={styles.upper}>
                    <ScrollView>
                        <StudentProfile />
                    </ScrollView>
                </View>
                <View style={styles.tab}>
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
            </View>
        )
    }
    else{
        return(
            <View style={styles.main}>
                <View style={styles.upper}>
                    <ScrollView>
                        <CompProfile />
                    </ScrollView>
                </View>
                <View style={styles.tab}>
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
        padding: 15,
        width:'100%',
        position:'absolute',
        bottom:0
    },
})

export default Home