import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import STYLES from '../../styles/global.style';
import styles from './styles/activities.style';
import { COLORS, SIZES } from '../../styles/theme';
import { Ionicons } from '@expo/vector-icons';
import { ActivityCard } from '../../components';
import useActivityStats from '../../hooks/useActivityStats';
import { putActivityStats } from '../../context/actions/activities';
import { useDispatch } from 'react-redux';
import { getDoc, doc } from 'firebase/firestore';
import { database } from '../../services/firebase';
import { auth } from '../../services/firebase';
import activitiesData from '../../screens/menu/activitiesData';
const ActivitiesScreen = () => {
  const navigation = useNavigation();
  const disptach = useDispatch();
  const [isLoading, setIsloading] = useState();

  const {
    stats: { finish, caloriesBurned, spent },
  } = useActivityStats();

  const handleNavigate = (item) => {
    navigation.navigate('ActivityDetailsScreen', { item });
  };
  const userId = auth.currentUser.uid;

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        setIsloading(true);
        const userDocRef = doc(
          database,
          'activitiesData',
          'XydrzMHoiQuTOagD4KEB'
        );
        const userDocSnap = await getDoc(userDocRef);
        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          disptach(putActivityStats(userData));
        }
        setIsloading(false);
      } catch (error) {
        console.log('Error fetching user role:', error);
      }
    };
    fetchUserInfo();
  }, []);

  return (
    <SafeAreaView edges={['right', 'bottom', 'left']} style={STYLES.container}>
      <ScrollView>
        <View style={[STYLES.wrapper, { flex: 1, marginTop: SIZES.small }]}>
          {/* weekly activites stats section */}
          <Text style={styles.sectionTitle}>Today's activities stats</Text>
          <View style={styles.cardRows}>
            <View style={styles.statsCard(SIZES.height * 0.2232)}>
              <Text style={styles.statsTitle()}>Finished</Text>
              <Text style={styles.statsCount(SIZES.xxLarge)}>{finish}</Text>
              <Text style={styles.completedActivities}>
                Completed activities
              </Text>
              <View style={styles.goalAchievedRow}>
                <Text style={styles.goalAchieved}>Goal achieved!</Text>
                <Ionicons
                  name="checkmark-circle"
                  size={18}
                  color={COLORS.green}
                />
              </View>
              <Text style={styles.goalStreak}>7-days streak</Text>
            </View>
            <View style={{ gap: SIZES.small }}>
              <View style={styles.statsCard(SIZES.height * 0.105)}>
                <Text style={styles.statsTitle(SIZES.small)}>
                  Calories burned
                </Text>
                <Text style={styles.statsCount(SIZES.xLarge)}>
                  {caloriesBurned}{' '}
                  <Text style={styles.statsCountLabel}>kcal</Text>
                </Text>
              </View>
              <View style={styles.statsCard(SIZES.height * 0.105)}>
                <Text style={styles.statsTitle(SIZES.small)}>Time spent</Text>
                <Text style={styles.statsCount(SIZES.xLarge)}>
                  {spent} <Text style={styles.statsCountLabel}>minutes</Text>
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
  );
};

export default ActivitiesScreen;
