import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import {
  HomeScreen,
  MainMenuScreen,
  ReportScreen,
  SettingsScreen,
  MyDoctorScreen,
} from '../screens';
import { COLORS, SIZES } from '../styles';
import SettingsStackNavigator from './SettingStackNavigator';

const icons = {
  Home: 'home',
  Reports: 'calendar',
  MyDoctor: 'fitness',
  Menu: 'grid',
  SettingsStack: 'settings',
};

const MainTab = createBottomTabNavigator();

const MainTabNavigator = () => {
  const navigation = useNavigation();

  return (
    <MainTab.Navigator
      initialRouteName='Home'
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
      <MainTab.Screen
        name='Home'
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <MainTab.Screen
        name='Reports'
        component={ReportScreen}
        options={{
          tabBarLabel: 'My Calendar',
          headerTitle: 'My Calendar'
        }}
      />
      <MainTab.Screen
        name='Menu'
        component={MainMenuScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Browse',
        }}
      />
      <MainTab.Screen
        name='MyDoctor'
        component={MyDoctorScreen}
        options={{
          title: 'My Doctors',
        }}
      />
      <MainTab.Screen
        name='SettingsStack'
        component={SettingsStackNavigator}
        options={{
          headerShown: false,
          title: 'Settings',
        }}
      />
    </MainTab.Navigator>
  );
};

export default MainTabNavigator;
