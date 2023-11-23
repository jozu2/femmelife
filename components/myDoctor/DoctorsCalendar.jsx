import React, { useState } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';

const DoctorsCalendar = () => {
  const [markedDates, setMarkedDates] = useState({
    '2023-11-01': { selected: true, marked: true, appointments: 5 },
    '2023-11-02': { selected: true, marked: true, appointments: 10 },
    '2023-11-03': { selected: true, marked: true, appointments: 10 },
    '2023-11-06': { selected: true, marked: true, appointments: 8 },
    '2023-11-07': { selected: true, marked: true, appointments: 8 },
    '2023-11-10': { selected: true, marked: true, appointments: 10 },
    '2023-11-15': { selected: true, marked: true, appointments: 10 },
    '2023-11-16': { selected: true, marked: true, appointments: 10 },
    '2023-11-17': { selected: true, marked: true, appointments: 3 },
    // Add more dates if needed
  });

  const handleDayPress = (date) => {
    if (markedDates[date.dateString] && markedDates[date.dateString].marked) {
      Alert.alert('Appointments', `${markedDates[date.dateString].appointments}/10 appointments`);
    }
  };

  const handleDayLongPress = (date) => {
    // if needed
  };

  return (
    <View>
      <Calendar
        markedDates={markedDates}
        onDayPress={handleDayPress}
        onDayLongPress={handleDayLongPress}
        style={{ borderRadius: 12 }}
      />
    </View>
  );
};

export default DoctorsCalendar;

const styles = StyleSheet.create({

});
