import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import STYLES from '../../styles/global.style';
import styles from './styles/activities.style';
import { COLORS, SIZES } from '../../styles/theme';
import { ActivityCard } from '../../components';
import { useDispatch } from 'react-redux';
import {  doc, onSnapshot } from 'firebase/firestore';
import { database } from '../../services/firebase';
import { auth } from '../../services/firebase';
import activitiesData from '../../screens/menu/activitiesData';
const ActivitiesScreen = () => {
  const navigation = useNavigation();
  const disptach = useDispatch();
  const [isLoading, setIsloading] = useState(false);
  const [actData, setActData] = useState(null);


  const handleNavigate = (item) => {
    navigation.navigate('ActivityDetailsScreen', { item });
  };



  useEffect(() => {
    const userId = auth.currentUser.uid;
    const userDocRef = doc(database, 'activitiesData', userId);
  
    const unsubscribe = onSnapshot(userDocRef, (userDocSnap) => {
      try {
        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          setActData(userData);
        }
        setIsloading(false);
      } catch (error) {
        console.log('Error fetching user role:', error);
      }
    });
  
    return () => unsubscribe(); // Cleanup the listener when the component unmounts or when the dependencies change
  }, []); // Empty dependency array means it runs once on mount
  


  return (
    <>
    {actData && (
      <SafeAreaView edges={['right', 'bottom', 'left']} style={STYLES.container}>
      <ScrollView>
        <View style={[STYLES.wrapper, { flex: 1, marginTop: SIZES.small }]}>
          {/* weekly activites stats section */}
          <Text style={styles.sectionTitle}>Today's activities stats</Text>
          <View style={styles.cardRows}>
            <View style={[styles.statsCard(SIZES.height * 0.2232), {justifyContent: 'center'}]}>
              <Text style={[styles.statsTitle(),{alignSelf:'center'}]}>Finished</Text>
              <Text style={[styles.statsCount(SIZES.xxLarge),{alignSelf: 'center'}]}>{actData.totalActivities}</Text>
              <Text style={styles.completedActivities}>
                Completed activities
              </Text>
       
            </View>
            <View style={{ gap: SIZES.small }}>
              <View style={styles.statsCard(SIZES.height * 0.105)}>
                <Text style={styles.statsTitle(SIZES.small)}>
                  Calories burned
                </Text>
                <Text style={styles.statsCount(SIZES.xLarge)}>
                {`  ${actData.totCalories} `}
                  <Text style={styles.statsCountLabel}>kcal</Text>
                </Text>
              </View>
              <View style={styles.statsCard(SIZES.height * 0.105)}>
                <Text style={styles.statsTitle(SIZES.small)}>Time spent</Text>
                <Text style={styles.statsCount(SIZES.xLarge)}>
                  {`  ${Math.floor(actData.totTimeSpent)} `} <Text style={styles.statsCountLabel}>minutes</Text>
                </Text>
              </View>
            </View>
          </View>

          {/* activies cards */}
          <Text style={styles.sectionTitle}>Activities</Text>
          <View>
            {/* did not use flatList since it only contains few cards */}
            {activitiesData.map((item) => {
              return (
                <ActivityCard
                  key={item.id}
                  activityName={item.activity}
                  image={item.image}
                  description={item.description}
                  duration={item.duration}
                  onPress={() => handleNavigate(item)}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
    )}
    </>
  );
};

export default ActivitiesScreen;
