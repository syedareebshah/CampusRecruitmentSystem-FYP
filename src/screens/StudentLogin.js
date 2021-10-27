import React from 'react';
import { TextInput, Button } from 'react-native-paper';

import {
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
} from 'react-native';


const StudentLogin = ({navigation}) => {

  return (
    <ScrollView style={{ padding: 40 }}>

      <View style={styles.firstView}>
        <Image style={styles.logo} source={require('./../assets/logo.png')} />
      </View>

      <View style={styles.ScndView}>

        <View style={styles.header}>

          <TextInput
            label="Email"
            mode='outlined'
          />
          <TextInput style={{ marginTop: 20 }}
            label="Password"
            mode='outlined'
          />
          <Button style={{ marginTop: 20, padding: 10 }} mode="contained" onPress={()=>{ navigation.navigate('StudentDetails')}}>
            Login
          </Button>

        </View>

        <View style={styles.footer}>
          <Text style={{textAlign:'center',textDecorationLine: 'underline'}} onPress={()=>{ navigation.navigate('StudentSinup')}}>Don't have a account? Sinup</Text>
        </View>

      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  firstView: {
    marginTop: 20,
    flex: 1,
    padding: 20,
  },
  ScndView: {
    flex: 1,
    flexDirection: 'column',
    height: 400,
    justifyContent:'space-between',
    marginBottom:50

  },
  header: {
    flex: 5
  },
  footer: {
    textAlign:'center',
    flex: 1,
  },
  logo: {
    marginBottom: 40,
    alignSelf: 'center',
    resizeMode: 'contain',
    height: 150,
    width: 150,
  }

});

export default StudentLogin;
