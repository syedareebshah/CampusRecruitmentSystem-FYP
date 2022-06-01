import * as React from 'react';
import {View,Text} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Jobs from '../screens/Jobs'
import ReportedJobs from '../screens/ReportedJobs';
import ReportedStudents from '../screens/ReportedStudents';
import ReportedComp from '../screens/ReportedComp';
import ReportedStud from '../screens/ReportedStud';


const Tab = createBottomTabNavigator();

function TabNav() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false
    }}>
      <Tab.Screen name="Job" component={Jobs}/>
      <Tab.Screen name="ReportedJobs" component={ReportedJobs}/>
      <Tab.Screen name="ReportedStudents" component={ReportedStud}/>
      <Tab.Screen name="ReportedComp" component={ReportedComp}/>
      
    </Tab.Navigator>
  );
}

export default TabNav;