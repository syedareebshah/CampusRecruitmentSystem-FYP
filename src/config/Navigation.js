import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StudentLogin from '../screens/StudentLogin';
import Sinup from '../screens/Sinup';
import FirstScreen from '../screens/FirstScreen';
import CompLogin from '../screens/CompLogin';
import AdminLogin from '../screens/AdminLogin';


const Stack = createNativeStackNavigator();

const Navigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>

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
            </Stack.Navigator>



        </NavigationContainer>
    );
};



export default Navigation;
