import { ScrollView, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react';
import styles from './styles/doctorDashboard.style';
import SafeAreaView from 'react-native-safe-area-view';
import STYLES from '../../styles/global.style';
import { DataCard, DoctorsCalendar, UpcomingPatient } from '../../components';
import { database } from '../../services/firebase';
import { collection, getDoc, doc } from 'firebase/firestore';

const DoctorDashboard = () => {
  const [pending, setPending] = useState(null);
  const [appointments, setAppointments] = useState(null);
  const [online, setOnline] = useState(null);
  const [patients, setPatients] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const documentReference = doc(database, 'doctorsData', 'testData');
        const documentSnap = await getDoc(documentReference);
        const data = documentSnap.data();

        setOnline(data?.online);
        setAppointments(data?.appointments);
        setPatients(data?.patients);
        setPending(data?.pending);

      } catch (error) {
        alert('Error retrieving data ' + error);
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <SafeAreaView style={STYLES.container}>
      <ScrollView>
        <View style={styles.wrapper}>

          <Text style={STYLES.sectionTitle}>Weekly Reports</Text>
          <View style={styles.dataCardsWrapper}>
            <DataCard data={patients} label="Total Patients" />
            <DataCard data={appointments} label="Appointments" />
            <DataCard data={pending} label="Pending" />
            <DataCard data={online} label="Online" />
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
