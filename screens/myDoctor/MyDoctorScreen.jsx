import React from 'react';
import { Text, View } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import STYLES from '../../styles/global.style';
import { DoctorCard } from '../../components';

const MyDoctorScreen = () => {
  return (
    <SafeAreaView style={STYLES.container}>
      <View style={STYLES.wrapper}>
        <DoctorCard />
      </View>
    </SafeAreaView>
  );
};

export default MyDoctorScreen;
