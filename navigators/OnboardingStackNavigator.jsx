import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WelcomeScreen } from '../screens';

const OnboardingStack = createNativeStackNavigator();

const OnboardingStackNavigator = () => {
  return (
    <OnboardingStack.Navigator
      initialRouteName='Welcome'
    >
      <OnboardingStack.Screen
        name='Welcome'
        component={WelcomeScreen}
        options={{
          headerShown: false,
        }}
      />


    </OnboardingStack.Navigator>
  );
};

export default OnboardingStackNavigator;
