import { Alert, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react';
import styles from './styles/doctorDashboard.style';
import SafeAreaView from 'react-native-safe-area-view';
import STYLES from '../../styles/global.style';
import { DataCard, DoctorsCalendar, UpcomingPatient } from '../../components';
import { auth, database } from '../../services/firebase';
import { collection, getDoc, doc, onSnapshot, updateDoc } from 'firebase/firestore';

const DoctorDashboard = () => {
  const [pending, setPending] = useState(null);
  const [appointments, setAppointments] = useState(null);
  const [saveAdata, setSaveAdata] = useState(null);
  const [patients, setPatients] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const documentReference = doc(database, 'doctorsData', 'testData');
  //       const documentSnap = await getDoc(documentReference);
  //       const data = documentSnap.data();

  //       setOnline(data?.online);
  //       setAppointments(data?.appointments);
  //       setPatients(data?.patients);
  //       setPending(data?.pending);

  //     } catch (error) {
  //       alert('Error retrieving data ' + error);
  //       console.log(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    const usersCollectionRef = collection(database, 'users');
  
    const unsubscribe = onSnapshot(usersCollectionRef, (usersSnapshot) => {
      try {
        const usersData = [];
  
        usersSnapshot.forEach((doc) => {
          if (doc.exists()) {
            const userData = { id: doc.id, ...doc.data() };
            if (userData.role !== 'doctor') {
              usersData.push(userData);
            }
          }
        });
  
        setPatients(usersData);
      } catch (error) {
        console.log('Error fetching users:', error);
      }
    });
  
    return () => unsubscribe();
  }, []);



  useEffect(() => {
    const userId = auth.currentUser.uid;
    const userDocRef = doc(database, 'appointments', userId);
  
    const unsubscribe = onSnapshot(userDocRef, (userDocSnap) => {
      try {
        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          setAppointments(userData);
        }
      } catch (error) {
        console.log('Error fetching user role:', error);
      }
    });
  
    return () => unsubscribe(); // Cleanup the listener when the component unmounts or when the dependencies change
  }, []); // Empty dependency array means it runs once on mount
  useEffect(() => {
    if (appointments === null) return;
  
    // Filter appointments where done is false
    const filteredAppointments = Object.keys(appointments).reduce((acc, appointmentId) => {
      const appointment = appointments[appointmentId];
      if (appointment.done) {
        acc[appointmentId] = appointment;
      }
      return acc;
    }, {});
  
    const numberOfAppointments = Object.keys(filteredAppointments).length;
    setSaveAdata(numberOfAppointments);
  }, [appointments]); // Add 'appointments' to the dependency array
  console.log('xxxxx',)
  return (
    <SafeAreaView style={STYLES.container}>
      <ScrollView>
        <View style={styles.wrapper}>

          <Text style={STYLES.sectionTitle}>Weekly Reports</Text>
          <View style={styles.dataCardsWrapper}>

          <TouchableOpacity
      activeOpacity={0.9}
      style={styles.wrapperx}
     
    >
      <Text style={styles.datax}>{patients !== null ? patients.length : 0}</Text>
      <Text style={styles.dataLabelx}>{`Total Patients`}</Text>
    </TouchableOpacity>

    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.wrapperx}
     
    >
      <Text style={styles.datax}>{saveAdata !== null ? saveAdata : 0}</Text>
      <Text style={styles.dataLabelx}>{`Done Appointments`}</Text>
    </TouchableOpacity>

            {/* <DataCard data={patients} label="Total Patients" /> */}
            {/* <DataCard data={appointments} label="Appointments" />
            <DataCard data={pending} label="Pending" />
            <DataCard data={online} label="Online" /> */}
          </View>

          <Text style={STYLES.sectionTitle}>Upcoming Schedule</Text>

          {appointments !== null &&  Object.keys(appointments).map((id) => {
          const item = appointments[id];
        return (
          <TouchableOpacity style={[styles.upcomingWrapper,{display: item.done ? 'none': 'flex'}]}  key={id}
          onPress={()=>{
            Alert.alert(
              'Add this goal?',
              'Are you finished with your appointment?',
              [
                { text: 'No', style: 'cancel' },
                { text: 'Yes', onPress: async () => {
               
    const userId = auth.currentUser.uid;
                  
    try {
      const userDocRef = doc(database, 'appointments', userId);
      const userDocSnap = await getDoc(userDocRef);
  
      if (userDocSnap.exists()) {
        await updateDoc(userDocRef, {
          [item.id]:{done: true}
        });
      
        console.log('Data updated successfully!');
      }
    } catch (error) {
      console.error('Error updating user data:', error);
    }



              }}
              ],
            );
          }}>
            <UpcomingPatient
              name={item.name}
              time={item.time}
              date={item.date}
              image={require('../../assets/images/avatar.jpg')}
            />
            {/* <UpcomingPatient
              name='Juana Dela Cruz'
              date='Fri 17 Nov, 2023 9:30 AM'
              image={require('../../assets/images/avatar-2.jpg')}
            />
            <UpcomingPatient
              name='Juana Dela Cruz'
              date='Fri 17 Nov, 2023 10:20 AM'
              image={require('../../assets/images/avatar-3.jpg')}
            /> */}
          </TouchableOpacity>
      );
    })}
          <View>
            <Text style={STYLES.sectionTitle}>My Calendar</Text>
            <DoctorsCalendar />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DoctorDashboard;


