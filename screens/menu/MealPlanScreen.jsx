import React, { useState } from 'react';
import { ActivityIndicator, FlatList, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import STYLES from '../../styles/global.style';
import { Agenda, AgendaList } from 'react-native-calendars';
import { FirestoreError, Firestore, collection, doc } from 'firebase/firestore';
import { auth, database } from '../../services/firebase';
import { COLORS, SIZES } from '../../styles';

const MealPlanScreen = () => {
  data = collection(database, 'meals')

  return (
    <SafeAreaView
      edges={['right', 'bottom', 'left']}
      style={STYLES.container}
    >
        <View style={[STYLES.wrapper, { marginTop: 12 }]}>
          <Agenda
            showClosingKnob={true}
            pastScrollRange={50}
            futureScrollRange={50}
            data={data}
          />
          <ActivityIndicator 
            size='large' 
            color={COLORS.secondary} 
            style={{ marginTop: SIZES.xxLarge * 6}} 
          />
        </View>


    </SafeAreaView>
  );
};

export default MealPlanScreen;
