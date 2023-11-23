import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import STYLES from '../../styles/global.style';
import styles from './doctorDetails.style';
import { COLORS } from '../../styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { DoctorsCalendar, AppointmentCard, MenuScreenCard } from '../../components';
import { useNavigation } from '@react-navigation/native';

const DoctorDetailsScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={STYLES.container}>
      <ScrollView style={{ overflow: 'visible' }}>
        <View style={STYLES.wrapper}>
          {/* doctors details */}
          <View style={styles.section}>
            <Image
              source={require('../../assets/images/doctor1.png')}
              style={styles.image}
            />
            <View>
              <Text style={styles.name}>Dr. Josefina Dela Cruz</Text>
              <Text style={styles.specialty}>OB Gynecologist</Text>

              <Text style={styles.details}>Years of experience: 14</Text>
              <Text style={[styles.details, { marginBottom: 12 }]}>License No: *****345</Text>

              <Text style={styles.detailsTitle}>Contact Details:</Text>

              <View style={styles.detailsRow}>
                <MaterialCommunityIcons name='facebook-messenger' color={COLORS.lightBlack} size={16} />
                <Text style={styles.contactDetails}>Messenger.com/DrJosefinaDelaCruzMD</Text>
              </View>
              <View style={styles.detailsRow}>
                <MaterialCommunityIcons name='map-marker' color={COLORS.lightBlack} size={16} />
                <Text style={styles.contactDetails}>Bldg 123, Guagua, Pampanga</Text>
              </View>
              <View style={styles.detailsRow}>
                <MaterialCommunityIcons name='phone-message' color={COLORS.lightBlack} size={16} />
                <Text style={styles.contactDetails}>09123-456-789</Text>
              </View>
            </View>
          </View>

          <MenuScreenCard
            label='My Consultation Data'
            onPress={() => navigation.navigate('ConsultationDetailsScreen')}
            image={require('../../assets/images/medical-data.png')}
          />

          <Text style={[STYLES.sectionTitle, { marginBottom: 0 }]}>My Appointments</Text>
          <View style={styles.section}>
            <Text style={styles.consulationSectionTitle}>Upcoming</Text>
            <AppointmentCard date='Fri 17 Nov, 2023' time='8:45 AM' />

            <Text style={[styles.consulationSectionTitle, { marginTop: 12 }]}>Recent</Text>
            <AppointmentCard date='Sat 4 Nov, 2023' time='10:45 AM' />
            <AppointmentCard date='Mon 2 Oct, 2023' time='2:00 PM' />
          </View>

          <Text style={[STYLES.sectionTitle, { marginBottom: 0 }]}>Doctor's Calendar</Text>
          <View style={[styles.section, { paddingTop: 4 }]}>
            <DoctorsCalendar />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DoctorDetailsScreen;
