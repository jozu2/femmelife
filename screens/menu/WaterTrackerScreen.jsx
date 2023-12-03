import React, { useState, useEffect } from 'react';
import { Text, View, Pressable, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import STYLES from '../../styles/global.style';
import { COLORS, SIZES } from '../../styles/theme';
import styles from './styles/waterTracker.style';
import CircularProgress from 'react-native-circular-progress-indicator';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { WaterDataCard } from '../../components';
import { connect } from 'react-redux';
import { doc, getDoc } from 'firebase/firestore';
import { auth, database } from '../../services/firebase';


const WaterTrackerScreen = ({ data }) => {
  const navigation = useNavigation();
  
  const [formattedDate, setFormattedDate] = useState('');
  const [waterIntake, setWaterIntake] = useState('');
  useEffect(() => {
    const date = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const formatted = date.toLocaleDateString('en-US', options);
    setFormattedDate(formatted);
  }, []);




  useEffect(() => {
    const fetchPatientData = async () => {
      const userId = auth.currentUser.uid;

      try {
        const patient1Ref = doc(database, "activitiesData", userId);
        const documentSnap = await getDoc(patient1Ref);
        if (documentSnap.exists()) {
          const patientData = documentSnap.data();
          setWaterIntake(patientData.waterIntake);
        }
      } catch (error) {
        console.error("Error fetching patient data:", error);
      }
    };

    fetchPatientData();
  }, []);



  return (
    <SafeAreaView
      style={STYLES.container}
      edges={['right', 'bottom', 'left']}
    >
      <View style={[STYLES.wrapper, { flex: 1 }]}>
        <View style={{justifyContent: 'center', alignItems: 'center', marginTop: '20%'}}>
          <Text style={[
            STYLES.sectionTitle,
            { marginBottom: 0, marginTop: SIZES.small }
          ]}>
            Today's statistic
          </Text>
          <Text style={styles.aveWaterIntake}>{waterIntake}ml</Text>
          <Text style={styles.aveWaterIntakeDate}>{formattedDate}</Text>
        </View>

        {/* circular progress */}
        <View style={styles.circularProgressWrapper}>
          <CircularProgress
            inActiveStrokeColor={COLORS.lightGray3}
            activeStrokeColor={COLORS.secondary}
            value={waterIntake / 20}
            valueSuffix={'%'}
            radius={120}
            activeStrokeWidth={SIZES.small}
            inActiveStrokeWidth={SIZES.small}
            progressValueStyle={styles.circularProgressValue}
            title={`${waterIntake}ml`}
            titleStyle={styles.circularProgressTitle}
          />
          <View style={styles.progressInfoWrapper}>
            <View>
              <Text style={styles.infoLabel}>Remaining</Text>
              <Text style={styles.infoValue}>{`${2000 - waterIntake } ml`}</Text>
            </View>
            <View>
              <Text style={styles.infoLabel}>Target</Text>
              <Text style={styles.infoValue}>2000ml</Text>
            </View>
          </View>
        </View>

        <View style={{ flex: 1 }}>
          <Pressable
            onPress={() => navigation.push('WaterStatsScreen')}
            style={styles.myStatisticsBtn}
          >
            <Text style={styles.myStatisticsText}>My statistics</Text>
            <Ionicons
              name='chevron-forward-outline'
              color={COLORS.lightBlack}
              size={24}
            />
          </Pressable>
          {/* <View style={[STYLES.sectionCard, { flex: 1, marginBottom: 0 }]}>
            <Text style={[styles.myStatisticsText, { marginBottom: 4 }]}>Today</Text>
            <ScrollView automaticallyAdjustsScrollIndicatorInsets={true} >
              <WaterDataCard time='7:00 AM' data='200ml' />
              <WaterDataCard time='8:00 AM' data='200ml' />
              <WaterDataCard time='9:30 AM' data='200ml' />
              <WaterDataCard time='10:45 AM' data='200ml' />
              <WaterDataCard time='12:30 PM' data='300ml' />
              <WaterDataCard time='1:30 PM' data='100ml' />
            </ScrollView>
          </View> */}
        </View>

      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  waterIntake: state.waterTracker.waterIntake,
})

export default connect(mapStateToProps)(WaterTrackerScreen);
