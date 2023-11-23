import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DoctorDashboard, DoctorSettings, MyPatientsScreen } from '../screens';
import { COLORS, SIZES } from '../styles';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

const icons = {
  DoctorDashboard: 'home',
  MyPatientsScreen: 'people',
  DoctorSettings: 'settings',
};

const DoctorStack = createBottomTabNavigator();

const DoctorStackNavigator = () => {
  return (
    <DoctorStack.Navigator
      initialRouteName='DoctorDashboard'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          const iconName = icons[route.name];
          return (
            <Ionicons
              name={focused ? iconName : `${iconName}-outline`}
              color={color}
              size={26}
            />
          )
        },
        tabBarActiveTintColor: COLORS.primaryDarker,
        tabBarInactiveTintColor: COLORS.gray,
        tabBarStyle: { height: 90 },
        headerTitleStyle: { fontFamily: 'semibold' },
        headerTitleStyle: {
          fontFamily: 'bold',
          fontSize: SIZES.medium + 2,
        }
      })}
    >
      <DoctorStack.Screen
        name='DoctorDashboard'
        component={DoctorDashboard}
        options={{
          headerTitle: 'Dashboard',
          tabBarLabel: 'Dashboard',
          headerRight: () =>
            <TouchableOpacity style={{ marginRight: 16 }}>
              <Ionicons name='notifications-outline' size={20} />
            </TouchableOpacity>
        }}
      />
      <DoctorStack.Screen
        name='MyPatientsScreen'
        component={MyPatientsScreen}
        options={{ headerTitle: 'My Patients', tabBarLabel: 'My Patients' }}
      />
      <DoctorStack.Screen
        name='DoctorSettings'
        component={DoctorSettings}
        options={{ headerTitle: 'Settings', tabBarLabel: 'Settings' }}
      />
    </DoctorStack.Navigator>
  );
};

export default DoctorStackNavigator;
