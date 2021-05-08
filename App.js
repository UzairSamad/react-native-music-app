import React, { useState } from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import ForgetPassword from './components/ForgetPassword'
import { NavigationContainer } from '@react-navigation/native';



const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Home"  component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUP" component={SignUp} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;
