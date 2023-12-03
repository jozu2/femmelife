import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, View, Pressable } from 'react-native';
import styles from './styles/sleepTracker.style';
import { SafeAreaView } from 'react-native-safe-area-context';
import STYLES from '../../styles/global.style';
import { COLORS, SIZES } from '../../styles';
import { LineChart } from 'react-native-gifted-charts';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SleepDataCard } from '../../components';
import { TouchableOpacity } from 'react-native';
import { Modal } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment-timezone';
import { Button } from 'react-native';
import { auth, database } from '../../services/firebase';
import { doc, getDoc, onSnapshot, updateDoc } from 'firebase/firestore';


const SleepTrackerScreen = () => {
  
  const navigation = useNavigation();
  
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleDateChange = (event, selected) => {
    if (event.type === 'set' && selected) {
      setShowDatePicker(false);
      setSelectedDate(selected);
    } else {
      setShowDatePicker(false);
    }
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const setBedtime = () => {
    setShowDatePicker(true);
  };

 







  ///////////
  const [selectedDate2, setSelectedDate2] = useState(new Date());
  const [showDatePicker2, setShowDatePicker2] = useState(false);

  const handleDateChange2 = (event, selected) => {
    if (event.type === 'set' && selected) {
      setShowDatePicker2(false);
      setSelectedDate2(selected);
    } else {
      setShowDatePicker2(false);
    }
  };

  const showDatepicker2 = () => {
    setShowDatePicker2(true);
  };

  const setBedtime2 = () => {
    setShowDatePicker2(true);
  };
/////////////
const userId = auth.currentUser.uid;
const handleSet = async () => {
  const x = new Date()
  if(selectedDate2 == x){
    alert('error')
    return
  }


  const userId = auth.currentUser.uid;
  try {
    const userDocRef = doc(database, 'sleepTracker', userId);
    const userDocSnap = await getDoc(userDocRef);

    if (userDocSnap.exists()) {

      await updateDoc(userDocRef, {
        wakeup: selectedDate2,
        bedtime: selectedDate
  
      });
      console.log('alarm updated successfully!');
      alert('set successfully!')
      setShowModal(false)
    }
  } catch (error) {
    console.error('Error updating user data:', error);
  }
};
//////////////////////
const [bedtimeTimestamp , setBedtimeTimestamp] = useState(null);
const [wakeupTimestamp , setwakeupTimestamp ] = useState(null);


const [timeDiffBed, setTimeDiffBed] = useState(null);

const [wakeUpDiff, setWakeUpDiff] = useState(null);

const [fetchDoneData, setFetchDOneData] = useState(null);

const [recentTimeSleep, setRecentTimeSleep] = useState({RecentW: null, recentB: null});


useEffect(() => {
  const userId = auth.currentUser.uid;
  const userDocRef = doc(database, 'sleepTracker', userId);

  const unsubscribe = onSnapshot(userDocRef, (userDocSnap) => {
    try {
      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();
        const timeS = userData.wakeup
        const timeB = userData.bedtime
        const fetchDone = userData.recent
        const recentTimeSleex = userData.recentBedtime

          if(recentTimeSleex){
            setRecentTimeSleep({RecentW: userData.recentWakeUp, recentB: userData.recentBedtime})
          }
        
if(timeS !== null){

  const milliseconds = timeS.seconds * 1000 + timeS.nanoseconds / 1e6;

        // Create a Date object
        const wakeupDate = new Date(milliseconds);
        
        // Use toLocaleTimeString to get the time string
        const wakeupTimeString = wakeupDate.toLocaleTimeString();
        setwakeupTimestamp(wakeupTimeString)
        console.log(wakeupTimestamp)

      
  const millisecondsBed = timeB.seconds * 1000 + timeB.nanoseconds / 1e6;

        // Create a Date object
        const bedTime = new Date(millisecondsBed);
        
        // Use toLocaleTimeString to get the time string
        const bedtimeString = bedTime.toLocaleTimeString();
        setBedtimeTimestamp(bedtimeString)
}


let formattedData = [];

if (fetchDone) {
  if (Array.isArray(fetchDone)) {
    // If fetchDone is already an array, use it directly
    formattedData = fetchDone;
  } else if (typeof fetchDone === 'object') {
    // If fetchDone is an object, convert it to an array of objects
    formattedData = Object.entries(fetchDone).map(([key, value]) => ({ [key]: value }));
  } else {
    console.warn('fetchDone is of unsupported type:', fetchDone);
  }
}

setFetchDOneData(formattedData);
}
    } catch (error) {
      console.log('Error fetching user role:', error);
    }
  });

  return () => unsubscribe(); 
}, [bedtimeTimestamp, wakeupTimestamp,]); 




useEffect(() => {
  // Get the current time in Manila (UTC+8)
  const currentManilaTime = moment().tz('Asia/Manila');

  console.log('Current time in Manila:', currentManilaTime.format());

  // Example: Set the bedtime
  const bedtime = moment.tz(bedtimeTimestamp, 'hh:mm:ss A', 'Asia/Manila');
  const wakeup = moment.tz(wakeupTimestamp, 'hh:mm:ss A', 'Asia/Manila');
  // Calculate the time difference
  const timeDifference = currentManilaTime.diff(bedtime);
  const timeDifferenceW = currentManilaTime.diff(wakeup);

  // Format the time difference
  const formattedTimeDifference = moment.duration(timeDifference).humanize();

  const formattedTimeDifferenceW = moment.duration(timeDifferenceW).humanize();

  
  console.log('Time difference:', formattedTimeDifference);
  setTimeDiffBed(formattedTimeDifference);
  setWakeUpDiff(formattedTimeDifferenceW)
  // Now you can use formattedTimeDifference in your component state or display it in the UI
}, [bedtimeTimestamp, wakeupTimestamp,timeDiffBed, wakeUpDiff,]);



//////////////////////////////////
const handleDoneBtn = async () => {
  const userId = auth.currentUser.uid;
  const currentDate = moment().format('ddd DD MMMM');
  const bedtime = moment.tz(bedtimeTimestamp, 'hh:mm:ss A', 'Asia/Manila');
  const wakeup = moment.tz(wakeupTimestamp, 'hh:mm:ss A', 'Asia/Manila');
  const timeDifferenceW = bedtime.diff(wakeup);

  // Calculate the time difference in hours and minutes
  const duration = moment.duration(timeDifferenceW);
  const hours = duration.hours();
  const minutes = duration.minutes();

  // Format the time difference as "X hours Y minutes"
  const formattedTimeDifference = `${hours} hours ${minutes} minutes`;

  try {
    const userDocRef = doc(database, 'sleepTracker', userId);
    const userDocSnap = await getDoc(userDocRef);

    if (userDocSnap.exists()) {
      const userData = userDocSnap.data();
      const existingDone = userData.Done || {};
      const updatedDone = { ...existingDone, [currentDate]: formattedTimeDifference };

      await updateDoc(userDocRef, { Done: updatedDone });
      await updateDoc(userDocRef, {
        recentWakeUp: wakeupTimestamp,
        recentBedtime: bedtimeTimestamp,
        wakeup: null,
        bedtime: null,
        recent: {[currentDate]: formattedTimeDifference} ,
     
      });
      console.log('Data updated successfully!');
      alert('Set successfully!');
      setShowModal(false);
      setwakeupTimestamp(null)
      setBedtimeTimestamp(null)
    }
  } catch (error) {
    console.error('Error updating user data:', error);
  }
};

const data = [
  { value: 8.1, label: 'Mon' },
  { value: 7.24, label: 'Tue' },
  { value: 8.0, label: 'Wed' },
  { value: 6.8, label: 'Thur' },
  { value: 7.8, label: 'Fri' },
  { value: 5, label: 'Sat' },
  { value: 6.41, label: 'Sun' },
];



  return (
    <SafeAreaView
      style={STYLES.container}
      edges={['right', 'left']} // exclude upper and bottom inset
    >
      <ScrollView scrollIndicatorInsets={{ top: 5 }}>
        {/* added flex of 1 for the scrollview below the bar graph */}
        <View style={[STYLES.wrapper, { flex: 1 }]}>
          <View>
            <Text style={[
              STYLES.sectionTitle,
              { marginBottom: 0, marginTop: SIZES.small }
            ]}>
              Average sleep time
            </Text>
            <Text style={styles.aveSleepTime}>7 hrs 48 mins</Text>
            <Text style={styles.aveSleepTimeDate}>Last 7 days | Nov 9-15, 2023</Text>
          </View>
          <View style={styles.barChartWrapper}>
            <LineChart
              data={data}
              maxValue={8}
              noOfSections={5}
              areaChart
              curved
              dataPointsColor={COLORS.secondary}
              startFillColor={COLORS.secondary}
              color={COLORS.secondary}
              startOpacity={0.8}
              endOpacity={0.5}
              // showVerticalLines
              showXAxisIndices
              xAxisIndicesColor={COLORS.secondary}
              verticalLinesColor={COLORS.lightGray3}
              rulesType='solid'
              rulesColor={COLORS.lightGray3}
              xAxisLabelTextStyle={styles.axisLabel}
              xAxisColor={COLORS.gray3}
              xAxisThickness={1}
              yAxisLabelSuffix='h'
              yAxisColor={COLORS.gray3}
              yAxisThickness={1}
              yAxisTextStyle={styles.axisLabel}
              initialSpacing={30}
              disableScroll
            />
          </View>
          <View style={[STYLES.sectionCard, styles.lastNightSleepCard]}>
            <View>
              <Text style={styles.lastNightSleepTitle}>Last night sleep</Text>


              <Text style={styles.lastNightSleepHrs}>
  {fetchDoneData !==null && fetchDoneData.map((data, index) => {
    const key = Object.keys(data)[0];
    const dataxD = data[key];

    // Check if dataxD is defined before trying to replace the negative sign
    const positiveDataxD = dataxD ? dataxD.replace(/-/, '') : '';

    return (
      <Text key={index}>
        {positiveDataxD}
      </Text>
    );
  })}
</Text>





             {recentTimeSleep.RecentW && <Text style={styles.lastNightSleepTime}>{`${recentTimeSleep.recentB} - ${recentTimeSleep.RecentW}`}</Text>}
            </View>
            <Image
              source={require("../../assets/images/sleeping-img.png")}
              style={styles.wakeUpImg}
            />
          </View>

          <Pressable
            onPress={() => navigation.push('SleepStatsScreen')}
            style={styles.dailySleepScheduleBtn}
          >
            <Text style={styles.dailySleepScheduleText}>Sleep schedule and data</Text>
            <Ionicons
              name='chevron-forward-outline'
              color={COLORS.gray}
              size={24}
            />
          </Pressable>

          <Text style={[STYLES.sectionTitle]}>Today's schedule</Text>
          <View style={[STYLES.sectionCard, styles.todayScheduleRow,{display: bedtimeTimestamp === null ? 'flex' : 'none'}]}>
            <View>
              <Text style={styles.todayScheduleSectionTitle}>No current Schedule</Text>
              <Text style={styles.todayScheduleSectionSubtitle}>{`Schedule: ${bedtimeTimestamp? bedtimeTimestamp : 'No data'}`}</Text>
            </View>
            <Image
              source={require('../../assets/images/sleeping-in-bed.png')}
              style={styles.todayScheduleImg}
            />
          </View>
          <View style={[STYLES.sectionCard, styles.todayScheduleRow,{display: wakeupTimestamp === null ? 'none' : 'flex'}]}>
            <View>
              <Text style={styles.todayScheduleSectionTitle}>{`Bedtime in ${timeDiffBed}`}</Text>
              <Text style={styles.todayScheduleSectionSubtitle}>{`Schedule: ${bedtimeTimestamp? bedtimeTimestamp : 'No data'}`}</Text>
            </View>
            <Image
              source={require('../../assets/images/sleeping-in-bed.png')}
              style={styles.todayScheduleImg}
            />
          </View>
          
          <View style={[STYLES.sectionCard, styles.todayScheduleRow,{display: wakeupTimestamp === null ? 'none' : 'flex'}]}>
            <View>
              <Text style={styles.todayScheduleSectionTitle}>{`Alarm in ${wakeUpDiff ? wakeUpDiff : 'No data'}`}</Text>
              <Text style={styles.todayScheduleSectionSubtitle}>{`Wake up: ${wakeupTimestamp? wakeupTimestamp : 'No data'}`}</Text>
            </View>
            <Image
              source={require('../../assets/images/alarm-clock.png')}
              style={styles.todayScheduleImg}
            />
          </View>
          {wakeupTimestamp &&   <TouchableOpacity onPress={handleDoneBtn}
          style={{
            backgroundColor: COLORS.secondary,
            alignItems: 'center',
            borderRadius: 30,
            paddingVertical: 12,
            marginBottom: 150,
            marginTop: 15
          }}>
            <Text style={{color: '#fff', fontSize: 18}}>Done</Text>
          </TouchableOpacity>}
       {!wakeupTimestamp &&   <TouchableOpacity onPress={()=>{
            setShowModal(true)
          }}
          style={{
            backgroundColor: COLORS.secondary,
            alignItems: 'center',
            borderRadius: 30,
            paddingVertical: 12,
            marginBottom: 150,
            marginTop: 15
          }}>
            <Text style={{color: '#fff', fontSize: 18}}>Set Alarm</Text>
          </TouchableOpacity>}
          <Modal
      animationType="slide"
      transparent={true}
      visible={showModal}
      onRequestClose={handleModalClose}
    >
      <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{
          backgroundColor: '#fff',
          borderRadius: 10,
          padding: 20,
          width: '80%',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
      <View style={{flexDirection: 'row', paddingTop: 20,paddingBottom: 5,justifyContent: 'center', alignItems:'center' }}>
      <Text style={{fontSize: 17, fontWeight: 'bold', marginRight: 10,color: COLORS.primary}}> Bedtime:</Text>
          <TouchableOpacity onPress={showDatepicker}>
            <Text>{selectedDate.toLocaleTimeString()}</Text>
          </TouchableOpacity>
      </View>
          {showDatePicker && (
            <DateTimePicker
              value={selectedDate}
              mode="time"
              is24Hour={false}
              display="default"
              onChange={handleDateChange}
            />
          )}
          {!showDatePicker && (
            <TouchableOpacity onPress={setBedtime} style={{
              paddingVertical: 6, paddingHorizontal: 30, alignItems: 'center', backgroundColor: COLORS.secondary, borderRadius: 30
            }}>
              <Text style={{color: '#fff', fontSize: 17, }}>Set Bedtime</Text>
            </TouchableOpacity>
          )}
         <View style={{flexDirection: 'row', paddingTop: 20,paddingBottom: 5,justifyContent: 'center', alignItems:'center' }}>
      <Text style={{fontSize: 17, fontWeight: 'bold', marginRight: 10,color: COLORS.primary}}> Wakeup Time:</Text>
          <TouchableOpacity onPress={showDatepicker2}>
            <Text>{selectedDate2.toLocaleTimeString()}</Text>
          </TouchableOpacity>
      </View>

      {showDatePicker2 && (
            <DateTimePicker
              value={selectedDate2}
              mode="time"
              is24Hour={false}
              display="default"
              onChange={handleDateChange2}
            />
          )}
          {!showDatePicker2 && (
            <TouchableOpacity onPress={setBedtime2} style={{
              paddingVertical:6, paddingHorizontal: 30, alignItems: 'center', backgroundColor: COLORS.secondary, borderRadius: 30
            }}>
              <Text style={{color: '#fff', fontSize: 17}}>Set Wakeup Time</Text>
            </TouchableOpacity>
          )}
 <View style={{flexDirection: 'row', paddingTop: 20,paddingBottom: 5,justifyContent: 'center', alignItems:'center', marginTop: 10}}>
<TouchableOpacity onPress={()=>{setShowModal(false)}} style={{backgroundColor: 'gray', paddingVertical: 15, paddingHorizontal: 30, borderRadius:30}}>
          <Text style={{color: '#fff', fontSize: 16, fontWeight: 'bold', }}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSet} style={{marginLeft: 30,backgroundColor: COLORS.primary, paddingVertical: 15, paddingHorizontal: 30, borderRadius:30}}>
          <Text style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>Set</Text>
        </TouchableOpacity></View>
        </View>
   
      </View>
    </Modal>

          {/* <Text style={STYLES.sectionTitle}>Sleep logs and data</Text>
          <View style={styles.sleepDataWrapper}>
            <SleepDataCard label='Sleep Schedule' data='10:00 PM - 6:00 AM' />
            <SleepDataCard label='Sleep Goal' data='8 hours' />
            <SleepDataCard label='Average Sleep Time' data='7.8 hours' />
          </View> */}
        </View>
      </ScrollView>
    </SafeAreaView >
  )
};

export default SleepTrackerScreen;
