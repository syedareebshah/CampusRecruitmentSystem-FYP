import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StudentLogin from '../screens/StudentLogin';
import FirstScreen from '../screens/FirstScreen';
import CompLogin from '../screens/CompLogin';
import AdminLogin from '../screens/AdminLogin';
import StudentSinup from '../screens/StudentSinup';
import AdminSinup from '../screens/AdminSinup';
import CompSinup from '../screens/CompSinup';
import StudentDetails from '../screens/StudentDetails';
import CompDetails from '../screens/CompDetails';
import StudentProfile from '../screens/StudentProfile';
import CompProfile from '../screens/ComProfile';
import Tab from '../screens/Tab';
import Home from '../screens/Home';
import Jobs from '../screens/Jobs';
import PostJob from '../screens/PostJob';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FilePick from '../screens/FilePick';
import JobApply from '../screens/JobApply';
import CompHome from '../screens/CompHome';
import Applications from '../screens/Applications';
import CompJobs from '../screens/CompJobs';



const Stack = createNativeStackNavigator();



const Navigation = () => {


    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="FirstScreen" component={FirstScreen}
                    options={{
                        title: 'Campus Recruitment System',
                        headerStyle: {
                            backgroundColor: '#6200ED',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            alignSelf: 'center',
                        },
                    }}
                />
                <Stack.Screen name="JobApply" component={JobApply}
                    options={{
                        title: 'Job Details',
                        headerStyle: {
                            backgroundColor: '#6200ED',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            alignSelf: 'center'
                        },
                    }}
                />


                <Stack.Screen name="CompProfile" component={CompProfile}
                    options={{
                        title: 'Company Profile',
                        headerStyle: {
                            backgroundColor: '#6200ED',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            alignSelf: 'center'
                        },
                    }}
                />



                <Stack.Screen name="CompHome" component={CompHome}
                    options={({ navigation }) => ({
                        headerRight: () => (
                            <TouchableOpacity onPress={() => { navigation.navigate('CompProfile'); }}><Icon style={{ color: 'white' }} name="account-circle" size={40} /></TouchableOpacity>
                        ),
                        title: 'Campus Recruitment System',
                        headerStyle: {
                            backgroundColor: '#6200ED',
                            fontWeight: 'bold',
                            alignSelf: 'center'
                        },
                        headerTintColor: '#fff',

                    })}
                />

                <Stack.Screen name="CompJobs" component={CompJobs}
                    options={{
                        title: 'Posted Jobs',
                        headerStyle: {
                            backgroundColor: '#6200ED',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            alignSelf: 'center'
                        },
                    }}
                />







                <Stack.Screen name="Applications" component={Applications}
                    options={{
                        title: 'Campus Recruitment System',
                        headerStyle: {
                            backgroundColor: '#6200ED',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            alignSelf: 'center',
                        },
                    }}
                />


                <Stack.Screen name="Jobs" component={Jobs}
                    options={{
                        title: 'Campus Recruitment System',
                        headerStyle: {
                            backgroundColor: '#6200ED',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            alignSelf: 'center'
                        },
                    }}
                />





                <Stack.Screen name="StudentDetails" component={StudentDetails}
                    options={{
                        title: 'Student Details',
                        headerStyle: {
                            backgroundColor: '#6200ED',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            alignSelf: 'center'
                        },
                    }}
                />


                <Stack.Screen name="FilePick" component={FilePick}
                    options={{
                        title: 'FilePick',
                        headerStyle: {
                            backgroundColor: '#6200ED',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            alignSelf: 'center'
                        },
                    }}
                />


                <Stack.Screen name="StudentLogin" component={StudentLogin}
                    options={{
                        title: 'Student Login',
                        headerStyle: {
                            backgroundColor: '#6200ED',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            alignSelf: 'center'
                        },
                    }}
                />

                <Stack.Screen name="PostJob" component={PostJob}
                    options={{
                        title: 'Post Job',
                        headerStyle: {
                            backgroundColor: '#6200ED',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            alignSelf: 'center'
                        },
                    }}
                />





                <Stack.Screen name="Home" component={Home}
                    options={({ navigation }) => ({
                        headerRight: () => (
                            <TouchableOpacity onPress={() => { navigation.navigate('StudentProfile'); }}><Icon style={{ color: 'white' }} name="account-circle" size={40} /></TouchableOpacity>
                        ),
                        title: 'C R S',
                        headerStyle: {
                            backgroundColor: '#6200ED',
                            fontWeight: 'bold',
                            alignSelf: 'center'
                        },
                        headerTintColor: '#fff',

                    })}
                />

                <Stack.Screen name="Tab" component={Tab}
                    options={{
                        title: 'Tab',
                        headerStyle: {
                            backgroundColor: '#6200ED',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            alignSelf: 'center'
                        },
                    }}
                />





                <Stack.Screen name="StudentProfile" component={StudentProfile}
                    options={{
                        title: 'Student Profile',
                        headerStyle: {
                            backgroundColor: '#6200ED',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            alignSelf: 'center'
                        },
                    }}
                />



                <Stack.Screen name="CompDetails" component={CompDetails}
                    options={{
                        title: 'Company Details',
                        headerStyle: {
                            backgroundColor: '#6200ED',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            alignSelf: 'center'
                        },
                    }}
                />





                <Stack.Screen name="CompSinup" component={CompSinup}
                    options={{
                        title: 'Company Sinup',
                        headerStyle: {
                            backgroundColor: '#6200ED',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            alignSelf: 'center'
                        },
                    }}
                />

                <Stack.Screen name="AdminSinup" component={AdminSinup}
                    options={{
                        title: 'Admin Sinup',
                        headerStyle: {
                            backgroundColor: '#6200ED',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            alignSelf: 'center'
                        },
                    }}
                />

                <Stack.Screen name="StudentSinup" component={StudentSinup}
                    options={{
                        title: 'Student Sinup',
                        headerStyle: {
                            backgroundColor: '#6200ED',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            alignSelf: 'center'
                        },
                    }}
                />

                <Stack.Screen name="AdminLogin" component={AdminLogin}
                    options={{
                        title: 'Admin Login',
                        headerStyle: {
                            backgroundColor: '#6200ED',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            alignSelf: 'center'
                        },
                    }}
                />

                <Stack.Screen name="CompLogin" component={CompLogin}
                    options={{
                        title: 'Company Login',
                        headerStyle: {
                            backgroundColor: '#6200ED',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            alignSelf: 'center'
                        },
                    }}
                />





            </Stack.Navigator>



        </NavigationContainer>
    );
};



export default Navigation;
