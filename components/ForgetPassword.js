/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ForgetPassword = ({ search, onSetSearch, onSubmit }) => {
  const navigation = useNavigation();

  const [firstname, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>ForgetPassword</Text>
      <Text >Enter your email we will send a reset link</Text>
      <View>
   
        <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={(val) => setEmail(val)} />
        <Button title="Confirm" onPress={onSubmit} />
        <TouchableOpacity onPress={_ => navigation.navigate('Login')}>
          <Text style={styles.text}  >Back to Login</Text>
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

export default ForgetPassword;
