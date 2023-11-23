import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SettingsScreen, Contacts, AboutApp, TermsAndConditions } from '../screens';
import { COLORS, SIZES } from '../styles';

const SettingsStack = createNativeStackNavigator();

const SettingsStackNavigator = () => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerTitleStyle: { fontFamily: 'semibold' },
        headerTitleStyle: {
          fontFamily: 'bold',
          fontSize: SIZES.medium + 2,
        },
        headerTintColor: COLORS.black,
      }}
    >
      <SettingsStack.Screen name='Settings' component={SettingsScreen} />
      <SettingsStack.Screen
        name='Contacts'
        component={Contacts}
        options={{ headerTitle: 'Contacts' }}
      />
      <SettingsStack.Screen
        name='AboutApp'
        component={AboutApp}
        options={{ headerTitle: 'About' }}
      />
      <SettingsStack.Screen
        name='TermsAndConditions'
        component={TermsAndConditions}
        options={{ headerTitle: 'Terms and Conditions' }}
      />
    </SettingsStack.Navigator>
  );
};

export default SettingsStackNavigator;
