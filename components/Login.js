/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  LoginManager,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';
const Login = ({ search, onSetSearch, onSubmit }) => {


  const navigation = useNavigation();

  const getInfo = (token) => {
    const PROFILE_REQUEST_PARAMS = {
      fields: {
        string: 'id,name,first_name,last_name',
      },
    };
    const profileRequest = new GraphRequest(
      '/me',
      { token, parameters: PROFILE_REQUEST_PARAMS },
      (error, user) => {
        if (error) {
          console.log('login info has error: ' + error);
        } else {
          // this.setState({ userInfo: user });
          navigation.navigate("Home")
          console.log('resulttttttttttttttt:', user);

        }
      },
    );
    new GraphRequestManager().addRequest(profileRequest).start();
  }


  const loginWithFacebook = async () => {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
    console.log(result, "RESSSSSSSSSSSSSSSS");
    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();
    getInfo(data.accessToken)
    console.log(data, "DAAAAAAAAAAAAAAAAAAa");
    if (!data) {
      throw 'Something went wrong obtaining access token';
    }
  }


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>
      <View>
        <TextInput style={styles.input} placeholder="Email" value={search} onChangeText={(val) => onSetSearch(val)} />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry value={search} onChangeText={(val) => onSetSearch(val)} />
        <Button title="Login" onPress={onSubmit} />
        <View style={{ marginTop: 10, alignItems: "center" }}>
          <TouchableOpacity
            onPress={loginWithFacebook}
            style={{ backgroundColor: "#5890FF", width: 250, borderRadius: 5, paddingHorizontal: 30, paddingVertical: 15 }}>
            <Text style={{ fontSize: 16, color: "white", textAlign: "center" }}>Login With Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginTop: 30, width: 250, backgroundColor: "#4285f4", borderRadius: 5, paddingHorizontal: 30, paddingVertical: 15 }}>
            <Text style={{ fontSize: 16, color: "white", textAlign: "center" }}>Login With Gmail</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={_ => navigation.navigate('SignUP')}>
          <Text style={styles.text}>Dont have an account? Sign Up here</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={_ => navigation.navigate('ForgetPassword')}>
          <Text style={styles.forgettext}>Forget Password ??</Text>
        </TouchableOpacity>
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
