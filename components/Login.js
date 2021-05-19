/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createResource } from '../WebApiServices/SimpleApiCalls'
import { user_login } from '../WebApiServices/WebServices'

const Login = ({ search, onSetSearch }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setisLoading] = useState(false)
  const navigation = useNavigation();

  const onSubmit = async () => {
    setisLoading(true)

    console.log('submittt')
    let data = {
      email: email,
      password: password
    }
    try {
      let res = await createResource(user_login, data)
      console.log(res, 'resresres');
      setisLoading(false)
      navigation.navigate('Home');
    } catch (error) {
      setisLoading(false)
      console.log(error.response.data.message, 'error');
      Alert.alert(
        "Error",
        error.response.data.message,
      );

      // alert(error);
    }

  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>
      <View>
        <TextInput style={styles.input} placeholder="Email" value={search} onChangeText={(val) => setEmail(val)} />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry value={search} onChangeText={(val) => setPassword(val)} />
        {!isLoading ? <Button title="Login" onPress={onSubmit} /> : <ActivityIndicator size="large" color="blue" />
        }
        <TouchableOpacity onPress={_ => navigation.navigate('SignUP')}>
          <Text style={styles.text}>Dont have an account? Sign Up here</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={_ => navigation.navigate('ForgetPassword')}>
          <Text style={styles.forgettext}>Forget Password ??</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f1f1f1',
    marginTop: 50
  },
  heading: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#dbdbdb',
    borderRadius: 4,
    backgroundColor: '#fff',
    color: '#363636',
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 20,
    marginVertical: 10
  },
  text: {
    color: 'blue',
    marginTop: 25,
    alignSelf: 'center',
  },
  forgettext: {
    color: 'red',
    marginTop: 25,
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'red'
  }
});

export default Login;
