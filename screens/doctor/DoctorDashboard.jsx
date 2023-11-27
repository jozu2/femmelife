import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react';
import styles from './styles/doctorDashboard.style';
import SafeAreaView from 'react-native-safe-area-view';
import STYLES from '../../styles/global.style';
import { DataCard, DoctorsCalendar, UpcomingPatient } from '../../components';
import { auth, database } from '../../services/firebase';
import { collection, getDoc, doc, onSnapshot } from 'firebase/firestore';

const DoctorDashboard = () => {
  const [pending, setPending] = useState(null);
  const [appointments, setAppointments] = useState(null);
  const [online, setOnline] = useState(null);
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
      <Text style={styles.datax}>{patients !== null ? patients.length : 0}</Text>
      <Text style={styles.dataLabelx}>{`Appointments`}</Text>
    </TouchableOpacity>

            {/* <DataCard data={patients} label="Total Patients" /> */}
            {/* <DataCard data={appointments} label="Appointments" />
            <DataCard data={pending} label="Pending" />
            <DataCard data={online} label="Online" /> */}
          </View>

          <Text style={STYLES.sectionTitle}>Upcoming Schedule</Text>
          <View style={styles.upcomingWrapper}>
            <UpcomingPatient
              name='Juana Dela Cruz'
              date='Fri 17 Nov, 2023 8:45 AM'
              image={require('../../assets/images/avatar.jpg')}
            />
            <UpcomingPatient
              name='Juana Dela Cruz'
              date='Fri 17 Nov, 2023 9:30 AM'
              image={require('../../assets/images/avatar-2.jpg')}
            />
            <UpcomingPatient
              name='Juana Dela Cruz'
              date='Fri 17 Nov, 2023 10:20 AM'
              image={require('../../assets/images/avatar-3.jpg')}
            />
          </View>

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


