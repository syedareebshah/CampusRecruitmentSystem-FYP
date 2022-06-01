import React from 'react';
import { TextInput, Button } from 'react-native-paper';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux'
import { AdminFlag, CompFlag, StudFlag } from '../redux/loginSlice';
import auth from '@react-native-firebase/auth';


import {
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
} from 'react-native';


const CompLogin = ({ navigation }) => {
  const dispatch = useDispatch()

  const ValidationSchema = yup.object().shape({
    email: yup.string().email().required("Enter a valid email address"),
    password: yup.string()
      .required('No password provided.')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/, 'Password must contain atleast one uppercase, one lowercase, one number and one special character.')
  });



  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values) => {
        auth()
          .signInWithEmailAndPassword(values.email, values.password)
          .then(() => {
            navigation.navigate('CompHome')
            console.log('User account created & signed in!');
          })
          .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
              alert("That email address is already in use!")
            }

            if (error.code === 'auth/invalid-email') {
              alert('That email address is invalid!')
            }

            console.error(error);
          });
      }
      }
      validationSchema={ValidationSchema}
    >
      {({ handleChange, handleBlur, handleSubmit, errors, isValid, touched, values }) => (
        <ScrollView style={{ padding: 40 }}>

          <View style={styles.firstView}>
            <Image style={styles.logo} source={require('./../assets/logo.png')} />
          </View>


          <View style={styles.ScndView}>
            <View style={styles.header}>

              <TextInput
                label="Email"
                mode='outlined'
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              {(errors.email && touched.email) &&
                <Text style={styles.err}>{errors.email}</Text>
              }
              <TextInput style={{ marginTop: 20 }}
                label="Password"
                mode='outlined'
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
              {(errors.password && touched.password) &&
                <Text style={styles.err}>{errors.password}</Text>
              }
              <Button
                disabled={!isValid}
                style={{ marginTop: 20, padding: 10 }} mode="contained" onPress={() => {
                  dispatch(StudFlag(false))
                  dispatch(CompFlag(true))
                  dispatch(AdminFlag(false))
                  handleSubmit()
                }}>
                Login
              </Button>

            </View>

            <View style={styles.footer}>
              <Text style={{ textAlign: 'center', textDecorationLine: 'underline' }} onPress={() => { navigation.navigate('CompSinup') }}>Don't have an account? Sinup</Text>
            </View>

          </View>

        </ScrollView>
      )}
    </Formik>
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
    justifyContent: 'space-between',
    marginBottom: 50
  },
  header: {
    flex: 5
  },
  footer: {
    textAlign: 'center',
    flex: 1,
  },
  logo: {
    marginBottom: 40,
    alignSelf: 'center',
    resizeMode: 'contain',
    height: 150,
    width: 150,
  },
  err: {
    fontSize: 14,
    color: 'red',
    marginTop: 4
  }

});

export default CompLogin;
