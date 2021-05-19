/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity ,ActivityIndicator} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createResource } from '../WebApiServices/SimpleApiCalls'
import { user_register } from '../WebApiServices/WebServices'

const SignUp = ({ search, onSetSearch }) => {
  const navigation = useNavigation();

  const [firstname, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [isLoading, setisLoading] = useState(false)


  const onSubmit = async () => {
    setisLoading(true)
    let data = {
      userName: userName,
      email: email,
      password: password
    }
    try {
      let res = await createResource(user_register, data);
      console.log(res, 'resresres');
      setisLoading(false)
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert(
        "Error",
        error.response.data.message,
      );
      setisLoading(false)
      // alert(error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sign Up</Text>
      <View>
        <TextInput style={styles.input} placeholder="First Name" value={firstname} onChangeText={(val) => setFirstName(val)} />
        <TextInput style={styles.input} placeholder="Last Name" value={lastName} onChangeText={(val) => setLastName(val)} />
        <TextInput style={styles.input} placeholder="User Name" value={userName} onChangeText={(val) => setUserName(val)} />
        <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={(val) => setEmail(val)} />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={(val) => setPassword(val)} />
        {!isLoading ? <Button title="Sign Up" onPress={onSubmit} /> : <ActivityIndicator size="large" color="blue" />
        }
        <TouchableOpacity onPress={_ => navigation.navigate('Login')}>
          <Text style={styles.text}  >Already have an account?? Back to Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f1f1f1',
    marginTop:10
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
    marginTop:10
  },
  text: {
    color: 'blue',
    marginTop: 25,
    alignSelf: 'center',

  }
});

export default SignUp;
