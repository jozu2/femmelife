import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import STYLES from '../../styles/global.style';
import styles from './styles/myPatients.style';
import { PatientCard } from '../../components';

const MyPatientsScreen = () => {
  return (
    <SafeAreaView style={STYLES.container}>
      <ScrollView>
        <View style={styles.wrapper}>
          <PatientCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyPatientsScreen;
