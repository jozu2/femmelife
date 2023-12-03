import React, { useEffect, useState } from 'react';
import { Pressable, Text, View, ScrollView, Modal, TextInput, TouchableOpacity } from 'react-native';
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


  const [userInfo, setUserInfo] = useState('');
  const [isLoading, setIsloading] = useState(false);
  const [day, setDay] = useState(null);
  const [savePressedDay, setSavePressedDay] = useState(false);

  const userId = auth.currentUser.uid;

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        setIsloading(true);
        const userDocRef = doc(database, 'users', userId);
        const userDocSnap = await getDoc(userDocRef);
        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          setUserInfo(userData.mensDate);
        }

        setIsloading(false);
      } catch (error) {
        console.error('Error fetching user role:', error);
      }
    };
    fetchUserInfo();
  }, []);

  const fetchUserInfo = async ({ startDate, endDate }) => {
    try {
      const userDocRef = doc(database, 'users', userId);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        await updateDoc(userDocRef, {
          mensDate: { startDate, endDate, day },
        });
        console.log('Data updated successfully!');
      }
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  useEffect(() => {
    if (userInfo) {
      const startDate = userInfo.startDate;
      const numOfDays = userInfo.day
      const updatedMarkedDates = { ...markedDates };
      Object.keys(updatedMarkedDates).forEach((date) => {
        updatedMarkedDates[date] = { marked: false };
      });

      for (let i = 0; i < numOfDays; i++) {
        const currentDate = calculateEndDate(startDate, i);
        updatedMarkedDates[currentDate] = {
          selected: true,
          marked: true,
          selectedColor: COLORS.primary,
        };
      }

      setMarkedDates(updatedMarkedDates);
      setSelectedDate(startDate);
    }
  }, [userInfo]);

  const handleDayPress = (day) => {
    setSavePressedDay(day)
      setShowModal(true)



  };



  const handleSet = () =>{
    if(day === null)return
    Alert.alert('Confirm ?', '', [
      { text: 'No', style: 'cancel' },
      {
        text: 'Yes',
        onPress: () => {
          const dayOfMens = day;
          const startDate = savePressedDay.dateString;
          const endDate = calculateEndDate(startDate, 4);
          const updatedMarkedDates = { ...markedDates };
          Object.keys(updatedMarkedDates).forEach((date) => {
            updatedMarkedDates[date] = { marked: false };
          });

          for (let i = 0; i < dayOfMens; i++) {
            const currentDate = calculateEndDate(startDate, i);
            updatedMarkedDates[currentDate] = {
              selected: true,
              marked: true,
              selectedColor: COLORS.primary,
            };
          }

          setMarkedDates(updatedMarkedDates);
          setSelectedDate(startDate);
          fetchUserInfo({ startDate, endDate });
          setShowModal(false)
        },
      },
    ]);
  }
  const calculateEndDate = (startDate, daysToAdd) => {
    const date = new Date(startDate);
    date.setDate(date.getDate() + daysToAdd);
    return date.toISOString().split('T')[0];
  };
  const [showModal, setShowModal] = useState(false)
  const handleModalClose = () => {
  
    setShowModal(false);
  };


  const handleInputChange = (text) => {
    setDay(text);
  };



  return (
    <>
           <Modal
            animationType="slide"
            transparent={true}
            visible={showModal}
            onRequestClose={handleModalClose}
          >
            <View style={{backgroundColor: 'red', flex: 1,  backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'center', alignItems: 'center'}}>
              <View style={{  backgroundColor: '#fff',
                    borderRadius: 10,
                    padding: 20,
                    width: '80%',
                    justifyContent: 'center',
                    alignItems: 'center'}}>

<View style={{flexDirection: 'row', justifyContent: 'center',alignItems: 'center', marginBottom: 1}}>
            <Text style={{fontWeight: 'bold'}} >Number of Days:</Text>
                <TextInput
                 style={{ width: '20%', paddingVertical: 6, borderRadius: 10, borderWidth :1,  paddingHorizontal: 20, marginVertical: 20, marginLeft: 15}}
                 onChangeText={handleInputChange} 
                 value={day} 
                  placeholder=""
                  keyboardType='numeric'
                />
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'center',alignItems: 'center', marginBottom: 10}}>

<TouchableOpacity onPress={()=>{
   setShowModal(false)
 }}
 style={{
   backgroundColor: 'gray', paddingHorizontal: 20,paddingVertical: 10,borderRadius: 30,borderWidth: 1
 }}>
   <Text style={{fontSize: 18, color: '#fff'}}>Cancel</Text>
 </TouchableOpacity>
 <TouchableOpacity 
 onPress={handleSet}
 style={{
   backgroundColor: 'pink', paddingHorizontal: 20,paddingVertical: 10,borderRadius: 30,borderWidth: 1, marginLeft: 20
 }}>
   <Text style={{fontSize: 18, color: '#fff', }}>Set</Text>
 </TouchableOpacity>

 
</View>


                    </View>
            </View>
                    </Modal>
    <SafeAreaView style={STYLES.container}>
      {!isLoading ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ overflow: 'visible' }}
        >
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
              <Text style={[STYLES.label, { fontSize: SIZES.large + 2 }]}>
                Cycle history
              </Text>
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
      ) : (
        <>
          <Text>Loading....</Text>
        </>
      )}
    </SafeAreaView></>
  );
};

export default ReportScreen;
