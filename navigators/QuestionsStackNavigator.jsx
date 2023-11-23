import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  OnboardingScreen,
  OnboardingScreen2,
  TermsScreen,
  Question1,
  Age,
  Question2,
  Question3,
  Question4,
  Question5,
  Question6,
  Question7,
  Question8,
  Question9,
} from '../screens';

const QuestionsStack = createNativeStackNavigator();

const screensWithDisabledGesture = ['Onboarding1', 'Question1',]; // Screens with disabled gesture to prevent from panning/returning to prev screen for ux purposes.

const QuestionsStackNavigator = () => {
  return (
    <QuestionsStack.Navigator
      initialRouteName='Onboarding'
      screenOptions={({ route }) => ({
        gestureEnabled: !screensWithDisabledGesture.includes(route.name), // Disable gesture on the last question
        headerShown: false,
      })}
    >
      <QuestionsStack.Screen
        name='Onboarding'
        component={OnboardingScreen}
        options={{
          headerShown: false,
        }}
      />
      <QuestionsStack.Screen
        name='Onboarding2'
        component={OnboardingScreen2}
        options={{
          headerShown: false,
        }}
      />
      <QuestionsStack.Screen
        name='Terms'
        component={TermsScreen}
        options={{
          headerShown: false,
        }}
      />
      <QuestionsStack.Screen
        name='Question1'
        component={Question1}
      />
      {/* will rename this */}
      <QuestionsStack.Screen
        name='Age'
        component={Age}
      />

      <QuestionsStack.Screen
        name='Question2'
        component={Question2}
      />
      <QuestionsStack.Screen
        name='Question3'
        component={Question3}
      />
      <QuestionsStack.Screen
        name='Question4'
        component={Question4}
      />
      <QuestionsStack.Screen
        name='Question5'
        component={Question5}
      />
      <QuestionsStack.Screen
        name='Question6'
        component={Question6}
      />
      <QuestionsStack.Screen
        name='Question7'
        component={Question7}
      />
      <QuestionsStack.Screen
        name='Question8'
        component={Question8}
      />
      <QuestionsStack.Screen
        name='Question9'
        component={Question9}
      />
    </QuestionsStack.Navigator>
  );
};

export default QuestionsStackNavigator;
