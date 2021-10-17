import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Sinup from '../screens/Sinup';


const Stack = createNativeStackNavigator();

const Navigation = () => {

    return (
        <NavigationContainer>
            
            <Stack.Navigator>
                <Stack.Screen name="Welcome" component={Sinup} />
                <Stack.Screen name="go" component={Login} />
            </Stack.Navigator>

            
            
        </NavigationContainer>
    );
};



export default Navigation;
