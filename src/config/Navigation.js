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


const Stack = createNativeStackNavigator();

const Navigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen name="FirstScreen" component={FirstScreen}
                    options={{
                        title: 'Campus Recruitment System',
                        headerStyle: {
                            backgroundColor: '#3F51B5',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            alignSelf: 'center'
                        },
                    }}
                />

                <Stack.Screen name="Home" component={Home}
                    options={{
                        title: 'Campus Recruitment System',
                        headerStyle: {
                            backgroundColor: '#3F51B5',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            alignSelf: 'center'
                        },
                    }}
                />

                <Stack.Screen name="Jobs" component={Jobs}
                    options={{
                        title: 'Campus Recruitment System',
                        headerStyle: {
                            backgroundColor: '#3F51B5',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            alignSelf: 'center'
                        },
                    }}
                />



                <Stack.Screen name="Tab" component={Tab}
                    options={{
                        title: 'Tab',
                        headerStyle: {
                            backgroundColor: '#3F51B5',
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
                            backgroundColor: '#3F51B5',
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
                            backgroundColor: '#3F51B5',
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
                            backgroundColor: '#3F51B5',
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
                            backgroundColor: '#3F51B5',
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
                            backgroundColor: '#3F51B5',
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
                            backgroundColor: '#3F51B5',
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
                            backgroundColor: '#3F51B5',
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
                            backgroundColor: '#3F51B5',
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
                            backgroundColor: '#3F51B5',
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
                            backgroundColor: '#3F51B5',
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
