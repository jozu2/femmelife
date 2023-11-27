import React, { useState } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';

const DoctorsCalendar = () => {
  const [markedDates, setMarkedDates] = useState({
   
    '2023-11-17': { selected: true, marked: true, appointments: 3 },
  });

  const handleDayPress = (date) => {
    Alert.alert(
      'Add this goal?',
      'Are you sure you want to add this to your goal today?',
      [
        { text: 'No', style: 'cancel' },
        { text: 'Yes', onPress: () => {
        const data = ('spendTime') 
        const desc = ('Spend my time in nature') 
        addActivitiesData(data, desc)
      
      }}
      ],
    );
    if (markedDates[date.dateString] && markedDates[date.dateString].marked) {
      Alert.alert('Appointments', `${markedDates[date.dateString].appointments}/10 appointments`);
    }
  };

  const handleDayLongPress = (date) => {
    // if needed
  };

  return (
    <>
      <View>
        
      </View>
      <Calendar
        markedDates={markedDates}
        onDayPress={handleDayPress}
        onDayLongPress={handleDayLongPress}
        style={{ borderRadius: 12 }}
      />
    </>
  );
};

export default DoctorsCalendar;

const styles = StyleSheet.create({

});
