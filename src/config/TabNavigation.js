import * as React from 'react';
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Jobs from '../screens/Jobs'
import ReportedJobs from '../screens/ReportedJobs';
import ReportedStudents from '../screens/ReportedStudents';
import ReportedComp from '../screens/ReportedComp';
import ReportedStud from '../screens/ReportedStud';
import Manicon from 'react-native-vector-icons/MaterialCommunityIcons'
import BriefCase from 'react-native-vector-icons/Entypo'
import FlagIcon from 'react-native-vector-icons/Entypo'
import AdminJob from '../screens/AdminJob';


const Tab = createBottomTabNavigator();

function TabNav() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarStyle: {
        height: 60,
        position: 'absolute',
        backgroundColor: 'blue',
      },
      tabBarActiveTintColor: 'yellow',
      tabBarInactiveTintColor: 'white',

    }}>
      <Tab.Screen name="Jobs" component={AdminJob}
        options={{
          headerBackground: 'blue',
          tabBarIcon: ({ color, size }) => {
            return (
              <View>
                <BriefCase name="briefcase" color={color} size={size} />
              </View>
            )
          }
        }}
      />
      <Tab.Screen name="ReportedJobs" component={ReportedJobs}
        options={{
          headerBackground: 'blue',
          tabBarIcon: ({ color, size }) => {
            return (
              <View>
                <FlagIcon name="flag" color={color} size={size} />
              </View>
            )
          }
        }}
      />
      <Tab.Screen name="ReportedStudents" component={ReportedStud}
        options={{
          headerBackground: 'blue',
          tabBarIcon: ({ color, size }) => {
            return (
              <View>
                <Manicon name="human-child" color={color} size={size} />
              </View>
            )
          }
        }}
      />

    </Tab.Navigator>
  );
}

export default TabNav;