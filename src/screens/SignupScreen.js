import React , {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import InputBox from '../components/InputBox';
import Button from '../components/Button';
import AuthButton from '../components/AuthButton';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import {Formik} from 'formik';
import * as Yup from 'yup';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  name: Yup.string()
    .min(6, 'Name Cannot be blank')
    .required('Name is required'),
  phoneno: Yup.string()
    .min(6, 'Phone number must be 10 digits')
    .required('Phone number is required'),
});

const Signup = () => {
  const navigation = useNavigation();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

//   const handleSignup = async (values) => {
//     // try {
//     //   // Create user with email & password in Firebase Auth
//     //   const userCredential = await auth().createUserWithEmailAndPassword(values.email, values.password);
//     //   const user = userCredential.user;

//     //   // Store additional user info in Firestore
//     //   await firestore().collection('users').doc(user.uid).set({
//     //     uid: user.uid,
//     //     name: values.name,
//     //     email: values.email,
//     //     phoneno: values.phoneno,
//     //     createdAt: firestore.FieldValue.serverTimestamp(),
//     //   });

//     //   Alert.alert('Success', 'Account created successfully');
//     //   navigation.navigate('Login');
//     // } catch (error) {
//     //   Alert.alert('Error', error.message);
//     // }
//   };

const handleRegister = async (values) => {
    setLoading(true);
    setError('');

    try {
      const userCredential = await auth().createUserWithEmailAndPassword(values.email, values.password);
      const userId = userCredential.user.uid;

      await firestore().collection('users').doc(userId).set({
        name: values.name,
        email: values.email,
        phoneno: values.phoneno,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });

      Alert.alert('Registration successful! Please log in.');
      navigation.navigate('Login');  // Navigate to login screen
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image
          style={{width: 200, height: 200}}
          resizeMode="cover"
          source={{
            uri: 'https://images.pexels.com/photos/20603979/pexels-photo-20603979/free-photo-of-close-up-of-a-person-taking-pictures-of-strawberries-on-a-cutting-board.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          }}
        />
      </View>

      <View>
        <Text style={styles.loginText}>Signup</Text>
      </View>

      <Formik
        initialValues={{email: '', password: '', phoneno:'', name:''}}
        validationSchema={validationSchema}
        onSubmit={handleRegister}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.inputBoxContainer}>
            <InputBox
              label={'Name'}
              iconName={'skull'}
              secureTextEntry={false}
              onChangeText={handleChange('name')}
              value={values.name}
            />
            {touched.name && errors.name && (
              <Text style={styles.error}>{errors.name}</Text>
            )}
            <View style={{marginTop: 12}}>
              <InputBox
                label={'Email'}
                iconName={'email'}
                secureTextEntry={false}
                onChangeText={handleChange('email')}
                value={values.email}
              />
              {touched.email && errors.email && (
                <Text style={styles.error}>{errors.email}</Text>
              )}
            </View>
            <View style={{marginTop: 12}}>
              <InputBox
                label={'Phone Number'}
                iconName={'phone'}
                secureTextEntry={false}
                onChangeText={handleChange('phoneno')}
                value={values.phoneno}
              />
              {touched.phoneno && errors.phoneno && (
                <Text style={styles.error}>{errors.phoneno}</Text>
              )}
            </View>
            <View style={{marginTop: 12}}>
              <InputBox
                label={'Password'}
                secureTextEntry={true}
                iconName={'lock'}
                onChangeText={handleChange('password')}
                value={values.password}
              />
              {touched.password && errors.password && (
                <Text style={styles.error}>{errors.password}</Text>
              )}
            </View>

            <View style={{marginTop: 24}}>
              <Button
                text={'Sign Up'}
                onPress={handleSubmit}
                backgroundColor={'#0A79DF'}
              />
            </View>

            <View style={{marginTop: 24, alignItems: 'center'}}>
              <Text style={{fontWeight: '600'}}> or, login with </Text>
            </View>

            <View
              style={[
                styles.buttonContainer,
                {justifyContent: 'space-between'},
              ]}>
              <AuthButton
                text={'facebook'}
                iconName={'facebook'}
                onPress={() => console.log('Login')}
              />
              <AuthButton
                text={'Google'}
                iconName={'google'}
                onPress={() => console.log('Login')}
              />
            </View>
            <View style={[styles.buttonContainer, {justifyContent: 'center'}]}>
              <Text style={{color: '#586776'}}>Don't have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text style={{color: '#0A79DF'}}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  loginText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginHorizontal: 32,
    marginTop: 24,
  },
  inputBoxContainer: {
    marginHorizontal: 32,
    marginTop: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  error: {color: 'red', fontSize: 12, marginBottom: 10},
});

export default Signup;
