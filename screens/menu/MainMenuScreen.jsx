import { ScrollView, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import STYLES from '../../styles/global.style';
import styles from './styles/mainMenu.style';
import { MenuScreenCard } from '../../components';
import { useNavigation } from '@react-navigation/native';

const menuCardData = [
  {
    image: require('../../assets/images/menu-exercise.png'),
    label: 'Activities',
    screen: 'ActivitiesScreen',
  },
  {
    image: require('../../assets/images/menu-sleep-management.png'),
    label: 'Sleep',
    screen: 'SleepTrackerScreen',
  },
  {
    image: require('../../assets/images/menu-meal-plan.png'),
    label: 'Meal planning',
    screen: 'MealPlanScreen',
  },
  {
    image: require('../../assets/images/menu-medicine.png'),
    label: 'Medicines',
    screen: 'MedicinesScreen',
  },
  {
    image: require('../../assets/images/menu-stress-management.png'),
    label: 'Stress management',
    screen: 'StressManagementScreen',
  },
  {
    image: require('../../assets/images/menu-water-intake.png'),
    label: 'Water intake tracker',
    screen: 'WaterTrackerScreen',
  },
];

const MainMenuScreen = () => {
  const navigation = useNavigation();

  const handleNavigate = (screen) => {
    navigation.navigate(screen)
  };

  return (
    <SafeAreaView
      style={STYLES.container}
      edges={['top', 'right', 'left']} // excluded bottom to remove the inset
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={STYLES.wrapper}
      >
        {/* menu cards options */}
        <Text style={styles.screenTitle}>Browse</Text>
        {menuCardData.map((menu, index) => (
          <MenuScreenCard
            key={index}
            image={menu.image}
            label={menu.label}
            onPress={() => handleNavigate(menu.screen)}
          />
        ))}
      </ScrollView>
    </SafeAreaView >
  );
};

export default MainMenuScreen;
