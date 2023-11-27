import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import STYLES from '../../styles/global.style';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '../../styles';
import { useNavigation } from '@react-navigation/native';
import { auth, database } from '../../services/firebase';
import { doc, getDoc } from 'firebase/firestore';
import styles from '../doctor/styles/patientDetails.style';


const ConsultationDetailsScreen = () => {
  const navigation = useNavigation();
  const [patientData, setPatientData] = useState(null);
  const userID = auth.currentUser.uid
  console.log(userID)
  useEffect(() => {
    const fetchPatientData = async () => {
      const userID = auth.currentUser.uid
      try {
        const patient1Ref = doc(database, 'patients', userID);
        const documentSnap = await getDoc(patient1Ref);

        if (documentSnap.exists()) {
          const patientData = documentSnap.data();
          setPatientData(patientData);
        }
      } catch (error) {
        console.error('Error fetching patient data:', error);
      }
    };
    fetchPatientData();
  }, []);



  if (!patientData) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' color={COLORS.secondary} />
      </View>
    );
  }

  // const formattedDateRegisteredData = patientData.lastCheckUp
  //   ? new Date(patientData.lastCheckUp.seconds * 1000).toLocaleDateString('en-US', {
  //     day: 'numeric',
  //     month: 'short',
  //     year: 'numeric',
  //   })
  //   : '';

  return (
    <SafeAreaView style={STYLES.container}>
      <ScrollView style={{ overflow: 'visible' }}>
        <View style={styles.wrapper}>
          <View style={styles.section}>
            <View style={styles.row}>
              <MaterialCommunityIcons name='dumbbell' size={18} color={COLORS.secondary} />
              <Text style={[styles.detailsTitle, { marginBottom: 0 }]}>Physical</Text>
            </View>
            <View style={{ marginTop: 8 }}>
              <Text style={styles.details}>Weight: {patientData.weight} kg</Text>
              <Text style={styles.details}>Blood Pressure: {patientData.bloodPressure} mm/Hg</Text>
              <Text style={styles.details}>Breast Lumps: {patientData.breastLumps}</Text>
              <Text style={styles.details}>Hirsutism: {patientData.hirsutism}</Text>
              <Text style={styles.details}>BMI: {patientData.BMI}</Text>
            </View>

          </View>

          <View style={styles.section}>
            <View style={styles.row}>
              <MaterialCommunityIcons name='file-find' size={18} color={COLORS.secondary} />
              <Text style={[styles.detailsTitle, { marginBottom: 0 }]}>Symptoms</Text>
            </View>
            <View style={{ marginTop: 8 }}>
              {/* <Text style={styles.details}>Irregular Period: {patientData.irregularPeriod}</Text>
              <Text style={styles.details}>Excessive hair growth: {patientData.excessiveHairGrowth}</Text>
              <Text style={styles.details}>Acne: {patientData.acne}</Text>
              <Text style={styles.details}>Infertility: {patientData.infertility}</Text>
              <Text style={styles.details}>Mood Swing: {patientData.moodSwings}</Text>
              <Text style={styles.details}>Weight gain: {patientData.weightGain}</Text>
              <Text style={styles.details}>Dark patches on skin: {patientData.darkPatchesOnSkin}</Text> */}
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.row}>
              <MaterialCommunityIcons name='water' size={19} color={COLORS.secondary} />
              <Text style={[styles.detailsTitle, { marginBottom: 0 }]}>Blood Test</Text>
            </View>

            <View style={{ marginTop: 8 }}>
              {/* <Text style={styles.details}>Hormone levels: {patientData.hormoneLevels}</Text>
              <Text style={styles.details}>Blood sugar levels: {patientData.bloodSugarLevels}</Text>
              <Text style={styles.details}>Cholesterol levels:  {patientData.cholesterolLevels}</Text>
              <Text style={styles.details}>Pap smear: {patientData.papSmear}</Text> */}
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.row}>
              <MaterialCommunityIcons name='gender-female' size={19} color={COLORS.secondary} />
              {/* <Text style={[styles.detailsTitle, { marginBottom: 0 }]}>Pelvic Exam</Text> */}
            </View>

            <View style={{ marginTop: 8 }}>
              {/* <Text style={styles.details}>Vulva and vagina abnormalities: {patientData.vulvaAndVaginaAbnormalities}</Text>
              <Text style={styles.details}>Bimanual exam: {patientData.bimanualExam}</Text>
              <Text style={styles.details}>Speculum exam: {patientData.speculumExam}</Text>
              <Text style={styles.details}>Thyroid function tests: {patientData.thyroidFunctionTest}</Text>*/}
            </View> 
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ConsultationDetailsScreen;
