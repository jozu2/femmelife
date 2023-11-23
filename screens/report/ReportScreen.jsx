import React, { useState } from 'react';
import { Pressable, Text, View, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import SafeAreaView from 'react-native-safe-area-view';
import STYLES from '../../styles/global.style';
import styles from './report.style';
import { COLORS, SIZES } from '../../styles';
import { CycleHistoryCard } from '../../components';
import { Alert } from 'react-native';
import { auth, database } from '../../services/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

const ReportScreen = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [markedDates, setMarkedDates] = useState({});
  const [cycleHistoryData, setCycleHistoryData] = useState([
    {
      month: 'September',
      length: '28',
      startedDate: 'Sept 4',
      status: 'normal',
    },
    {
      month: 'August',
      length: '29',
      startedDate: 'August 6',
      status: 'normal',
    },
    {
      month: 'July',
      length: '26 ',
      startedDate: 'July 9',
      status: 'normal',
    },
    {
      month: 'June',
      length: '35',
      startedDate: 'June 2',
      status: 'abnormal',
    },
    {
      month: 'May',
      length: '31',
      startedDate: 'April 30',
      status: 'normal',
    },
  ]);

  console.log(selectedDate)

  const [userInfo, setUserInfo] = useState('');
  const userId = auth.currentUser.uid;
console.log(userId)
  const fetchUserInfo = async (startDate) => {
    try {
      const userDocRef = doc(database, 'users', userId);
      const userDocSnap = await getDoc(userDocRef);
  
      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();
        
        await updateDoc(userDocRef, {
          mensDate: startDate
        });
        console.log('Data updated successfully!');
   
      }
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };



  const handleDayPress = (day) => {


    Alert.alert(
      'Confirm ?',
      '',
      [
        { text: 'No', style: 'cancel' },
        { text: 'Yes', onPress: () => {  const dayOfMens = 5
          const startDate = day.dateString;
      
          const updatedMarkedDates = { ...markedDates };
          Object.keys(updatedMarkedDates).forEach((date) => {
            updatedMarkedDates[date] = { marked: false };
          });
      
          
          for (let i = 0; i < dayOfMens; i++) {
            const currentDate = calculateEndDate(startDate, i);
            updatedMarkedDates[currentDate] = {selected: true, marked: true, selectedColor: COLORS.primary };
          }
      
          setMarkedDates(updatedMarkedDates);
          setSelectedDate(startDate);
        
          fetchUserInfo(startDate)
        
        
        }, },
      ],
    );
   
  };

  const calculateEndDate = (startDate, daysToAdd) => {
    const date = new Date(startDate);
    date.setDate(date.getDate() + daysToAdd);
    return date.toISOString().split('T')[0];
  };

  return (
    <SafeAreaView style={STYLES.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ overflow: 'visible' }}>
        <View style={STYLES.wrapper}>
          <Calendar
            style={styles.calendar}
            onDayPress={handleDayPress}
            theme={{
              todayTextColor: COLORS.secondary,
              textDayFontFamily: 'regular',
            }}
            hideArrows={false}
            enableSwipeMonths={true}
            markedDates={markedDates}
          />

          <Text style={[STYLES.sectionTitle, { marginTop: SIZES.xLarge }]}>
            My period logs and insights
          </Text>
          <View style={STYLES.sectionCard}>
            <Text style={[STYLES.label, { fontSize: SIZES.large + 2 }]}>Cycle history</Text>
            {cycleHistoryData.map((cycle, index) => (
              <CycleHistoryCard
                key={index}
                month={cycle.month}
                length={cycle.length}
                startedDate={cycle.startedDate}
                status={cycle.status}
              />
            ))}
          </View>
          <View style={STYLES.sectionCard}>
            <Text style={STYLES.label}>Cycle symptoms</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReportScreen;