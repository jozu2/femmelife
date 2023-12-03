import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStackNavigator from './AuthStackNavigator';
import OnboardingStackNavigator from './OnboardingStackNavigator';
import QuestionsStackNavigator from './QuestionsStackNavigator';
import DoctorStackNavigator from './DoctorStackNavigator';
import MainTabNavigator from './MainTabNavigator';
import SettingsStackNavigator from './SettingStackNavigator';
import {
  ActivitiesScreen,
  ActivityDetailsScreen,
  MealPlanScreen,
  MedicinesScreen,
  NotificationsScreen,
  PeriodTrackerScreen,
  SleepStatsScreen,
  SleepTrackerScreen,
  StressManagementScreen,
  WaterStatsScreen,
  WaterTrackerScreen,
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
  DoctorDetailsScreen,
  Contacts,
  AboutApp,
  TermsAndConditions,
  PatientDetailsScreen,
  PatientDetailsEditScreen,
  ConsultationDetailsScreen,
} from '../screens';
import { COLORS, SIZES } from '../styles';
import { auth, database } from '../services/firebase';
import { ActivityIndicator } from 'react-native';
import { doc, getDoc } from 'firebase/firestore';
import PatientAnalytics from '../screens/doctor/PatientAnalytics';
import MealPlan from '../screens/doctor/MealPlan';

const RootStack = createNativeStackNavigator();

const screenWithDisabledScreens = ['MainTabStack',] // other screens are disabled at the questions stack.

const RootStackNavigator = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [roleDetermined, setRoleDetermined] = useState(true); 

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      const xd = auth.currentUser;
      if(xd === null){
        setUser(null);
        setLoading(false);
        return
      }
      if(xd.emailVerified){
        setUser(user);
        setLoading(false);
      }else{
        setUser(null);
        setLoading(false);
      }
     
    });

    return () => {
      unsubscribe();
    }
  }, [user, auth,setUser, loading]);

  const [userPcosData, setUserPcosData] = useState(null);
  console.log(userRole)

  useEffect(() => {
    if (user !== null) {
    const fetchUserRole = async () => {
      try {
        const userId = auth.currentUser.uid;
        const userDocRef = doc(database, 'users', userId);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          setUserRole(userData.role);
          setRoleDetermined(true); // set to true after fetching
        }

      } catch (error) {
        console.error('Error fetching user role:', error);
      }
    };
      fetchUserRole();
    }
  }, [user, auth, setUser]);
  useEffect(() => {
    if (user !== null) {
    const fetchPcosData = async () => {
      
      try {
      const userId = auth.currentUser.uid;
        const userPcosRef = doc(database, 'pcosData', userId);
        const userPcosRefSnap = await getDoc(userPcosRef);
        if (userPcosRefSnap.exists()) {
          const userPData = userPcosRefSnap.data();
          setUserPcosData(userPData.isSet);
        }
      } catch (error) {
        console.error('Error fetching user pcos data:', error);
      }
    };

   
      fetchPcosData();
    }
  }, [user, auth, setUser, userPcosData ,setUserPcosData]);

  
  if (loading) {
    return (
      <ActivityIndicator
        size='large'
        color={COLORS.secondary}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      />
    );
  };

  if (user) {
    if (userRole === 'doctor') {
      return (
        <NavigationContainer>
          <RootStack.Navigator
            screenOptions={{
              headerTintColor: COLORS.black,
            }}
          >
            <RootStack.Screen
              name='DoctorsTabStack'
              component={DoctorStackNavigator}
              options={{ headerShown: false }}
            />
            <RootStack.Screen name='Contacts' component={Contacts} />
            <RootStack.Screen name='AboutApp' component={AboutApp} />
            <RootStack.Screen name='TermsAndConditions' component={TermsAndConditions} />
            <RootStack.Screen name='PatientA' component={PatientAnalytics}  options={{ headerTitle: 'Patient Analytics' }} />
            <RootStack.Screen name='MealPlan' component={MealPlan}  options={{ headerTitle: 'Patient MealPlan' }} />
            <RootStack.Screen
              name='PatientDetails'
              component={PatientDetailsScreen}
              options={{ headerTitle: 'Patient Details' }}
            />
            <RootStack.Screen
              name='PatientDetailsEdit'
              component={PatientDetailsEditScreen}
              options={{ headerTitle: 'Edit Details', presentation: 'modal' }}
            />
          </RootStack.Navigator>
        </NavigationContainer>
      );
    };

    return (
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName='MainTabStack'
          screenOptions={({ route }) => ({
            gestureEnabled: !screenWithDisabledScreens.includes(route.name), // Disable gesture on the last question
            headerTintColor: COLORS.black,
            headerTitleStyle: {
              fontFamily: 'bold',
              fontSize: SIZES.medium + 2,
            },
          })}
        >
          {!userPcosData && ( <RootStack.Screen
            name='QuestionsStack'
            component={QuestionsStackNavigator}
            options={{
              headerShown: false,
            }}
          />)}
     
          <RootStack.Screen
            name='MainTabStack'
            component={MainTabNavigator}
            options={{
              headerShown: false,
            }}
          />
          <RootStack.Screen
            name='SettingsStack'
            component={SettingsStackNavigator}
            options={{
              headerShown: false,
            }}
          />
          <RootStack.Screen
            name='NotificationsScreen'
            component={NotificationsScreen}
            options={{
              title: 'Notifications'
            }}
          />
          <RootStack.Screen
            name='Onboarding'
            component={OnboardingScreen}
            options={{
              headerShown: false,
            }}
          />
          <RootStack.Screen
            name='Onboarding2'
            component={OnboardingScreen2}
            options={{
              headerShown: false,
            }}
          />
          <RootStack.Screen
            name='Terms'
            component={TermsScreen}
            options={{
              headerShown: false,
            }}
          />
          <RootStack.Screen
            name='Question1'
            component={Question1}
          />
          {/* will rename this */}
          <RootStack.Screen
            name='Age'
            component={Age}
          />

          <RootStack.Screen
            name='Question2'
            component={Question2}
          />
          <RootStack.Screen
            name='Question3'
            component={Question3}
          />
          <RootStack.Screen
            name='Question4'
            component={Question4}
          />
          <RootStack.Screen
            name='Question5'
            component={Question5}
          />
          <RootStack.Screen
            name='Question6'
            component={Question6}
          />
          <RootStack.Screen
            name='Question7'
            component={Question7}
          />
          <RootStack.Screen
            name='Question8'
            component={Question8}
          />
          <RootStack.Screen
            name='Question9'
            component={Question9}
          />

          {/* menu screens opt */}
          <RootStack.Screen
            name='MedicinesScreen'
            component={MedicinesScreen}
            options={{ headerTitle: 'Medicines' }}
          />
          <RootStack.Screen
            name='WaterTrackerScreen'
            component={WaterTrackerScreen}
            options={{ headerTitle: 'Water Intake Tracker' }}
          />
          <RootStack.Screen
            name='MealPlanScreen'
            component={MealPlanScreen}
            options={{ headerTitle: 'Meal Planning' }}
          />
          <RootStack.Screen
            name='SleepTrackerScreen'
            component={SleepTrackerScreen}
            options={{ headerTitle: 'Sleep Tracker' }}
          />
          <RootStack.Screen
            name='ActivitiesScreen'
            component={ActivitiesScreen}
            options={{
              headerTitle: 'Activities'
            }}
          />
          <RootStack.Screen
            name='ActivityDetailsScreen'
            component={ActivityDetailsScreen}
          />
          <RootStack.Screen
            name='PeriodTrackerScreen'
            component={PeriodTrackerScreen}
            options={{ headerTitle: 'Period Tracker' }}
          />
          <RootStack.Screen
            name='StressManagementScreen'
            component={StressManagementScreen}
            options={{ headerTitle: 'Stress Management' }}
          />
          <RootStack.Screen
            name='WaterStatsScreen'
            component={WaterStatsScreen}
            options={{
              headerBackTitle: 'Back',
              headerTitle: 'Water Intake Statistics',
            }}
          />
          <RootStack.Screen
            name='SleepStatsScreen'
            component={SleepStatsScreen}
            options={{
              headerBackTitle: 'Back',
              headerTitle: 'Sleep Schedule',
            }}
          />
          <RootStack.Screen
            name='DoctorDetailsScreen'
            component={DoctorDetailsScreen}
            options={{
              headerTitle: '',
            }}
          />
          <RootStack.Screen
            name='ConsultationDetailsScreen'
            component={ConsultationDetailsScreen}
            options={{
              headerTitle: 'My Consultation Data'
            }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    );
  };


  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName='OnboardingStack'
        screenOptions={({ route }) => ({
          gestureEnabled: !screenWithDisabledScreens.includes(route.name), // Disable gesture on the last question
          headerTintColor: COLORS.black,
          headerTitleStyle: {
            fontFamily: 'bold',
            fontSize: SIZES.medium + 2,
          },
        })}
      >
        <RootStack.Screen
          name='OnboardingStack'
          component={OnboardingStackNavigator}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name='AuthStack'
          component={AuthStackNavigator}
          options={{
            headerShown: false,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigator;