import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen, SignUpScreen } from '../screens';

const AuthStack = createNativeStackNavigator();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name='Login'
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen 
        name='SignUp' 
        component={SignUpScreen}
        options={{
          title: 'Sign up',
          headerTintColor: "#000000",
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
