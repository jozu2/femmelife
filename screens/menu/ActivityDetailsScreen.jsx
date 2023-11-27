import React, { useEffect, useState } from 'react';
import { Text, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { COLORS, SIZES } from '../../styles';
import { Ionicons } from '@expo/vector-icons';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import STYLES from '../../styles/global.style';
import styles from './styles/activityDetails.style';
import useActivityStats from '../../hooks/useActivityStats';
import { updateDoc, doc, getDoc } from 'firebase/firestore';
import { database } from '../../services/firebase';
import { auth } from '../../services/firebase';
import { useDispatch } from 'react-redux';
import { updateActivities } from '../../context/actions/activities';
import { Alert } from 'react-native';

const ActivityDetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const { item } = route.params;
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReset, setIsReset] = useState(false);
  const [durationDone, setDurationDone] = useState(false);

  const activityStats = useActivityStats();
  useEffect(() => {
    if (item.activity) {
      navigation.setOptions({
        headerTitle: item.activity,
      });
    }
  }, [item, navigation]);

  const addActivitiesData = async () => {
  const userId = auth.currentUser.uid;
    try {
      const userDocRef = doc(
        database,
        'activitiesData',
        userId
      );
      const userDocSnap = await getDoc(userDocRef);
     const data = (userDocSnap.data())

      if (userDocSnap.exists()) {
      const act = data.totalActivities + 1
      const calories = data.totCalories + item.calories
      const timeSpent = data.totTimeSpent + item.duration
      await updateDoc(userDocRef, {
        totalActivities: act,
        totCalories: calories,
        totTimeSpent: timeSpent,
      });
      
    alert('Activity Finished!')
        console.log('Data updated successfully!');
      }
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  // const updateFinishedCount = () => {
  //   dispatch(updateActivities(item.id));
  //   addActivitiesData(activityStats);
  // };

  // useEffect(() => {
  //   if (durationDone) {
  //     updateFinishedCount(item.id);
  //   }
  // }, [durationDone]);

  const handleTimerReset = () => {
    setDurationDone(false);
    setIsReset(true);

    setTimeout(() => {
      setIsReset(false);
    }, 100);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <SafeAreaView edges={['right', 'bottom', 'left']} style={STYLES.container}>
      <View style={[STYLES.wrapper, { marginTop: SIZES.small }]}>
        <View style={[STYLES.sectionCard, { marginBottom: SIZES.xLarge }]}>
          <View style={styles.sectionHeader}>
            <Text style={styles.title}>{item.activity}</Text>
            <View style={styles.row}>
              <Ionicons
                name="time-outline"
                color={COLORS.gray}
                size={SIZES.medium + 2}
                style={styles.icon}
              />
              <Text style={styles.duration}>
                Duration: {item.duration} minutes
              </Text>
            </View>
            <View style={styles.row}>
              <Ionicons
                name="flame-outline"
                color={COLORS.gray}
                size={SIZES.medium + 2}
                style={styles.icon}
              />
              <Text style={styles.duration}>Calories to burn: 35 calories</Text>
            </View>
          </View>

          <Text style={styles.description}>
            Loremsssss ipsum dolor sit, amet consectetur adipisicing elit. Esxpedita
            sed, tempore eaque quos dignissimos sequi. Hic minima repudiandae
            soluta fugit, doloremque iusto dolorum explicabo cupiditate tenetur
            consectetur blanditiis maiores omnis provident molestiae vel enim
            porro voluptatem culpa assumenda veniam repellat? Deleniti rerum
            eveniet deserunt ab.
          </Text>
        </View>

        {/* timer */}
        <View style={styles.timerWrapper}>
          <CountdownCircleTimer
            key={isReset ? 'reset-key' : 'normal-key'}
            isPlaying={isPlaying}
            duration={durationDone ? 0 : item.duration * 60}
            colors={COLORS.secondary}
            size={270}
            onComplete={addActivitiesData}
          >
            {({ remainingTime }) => (
              <Text style={styles.timerCount}>
                {remainingTime > 0 ? formatTime(remainingTime) : '00:00'}
              </Text>
            )}
          </CountdownCircleTimer>
          <View style={styles.timerBtnsRow}>
            <Pressable
              style={styles.timerBtn(COLORS.darkGray)}
              onPress={handleTimerReset}
            >
              <Text style={styles.timerBtnText}>reset</Text>
            </Pressable>
            <Pressable
              onPress={() => setIsPlaying(!isPlaying)}
              style={styles.timerBtn(isPlaying ? COLORS.yellow : COLORS.green2)}
              disabled={durationDone}
            >
              <Text style={styles.timerBtnText}>
                {isPlaying ? 'Pause' : 'Start'}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ActivityDetailsScreen;
