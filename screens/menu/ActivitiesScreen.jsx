import React, { useState } from 'react';
import { ScrollView, Text, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import STYLES from '../../styles/global.style';
import styles from './styles/activities.style';
import { COLORS, SIZES } from '../../styles/theme';
import { Ionicons } from '@expo/vector-icons';
import { ActivityCard } from '../../components';
import activitiesData from './activitiesData';


const ActivitiesScreen = () => {
  const navigation = useNavigation();

  const handleNavigate = (item) => {
    navigation.navigate('ActivityDetailsScreen', { item });
  };

  return (
    <SafeAreaView
      edges={['right', 'bottom', 'left']}
      style={STYLES.container}
    >
      <ScrollView style={{ overflow: 'visible' }}>
        <View style={[STYLES.wrapper, { flex: 1, marginTop: SIZES.small }]}>
          {/* weekly activites stats section */}
          <Text style={styles.sectionTitle}>Today's activities stats</Text>
          <View style={styles.cardRows}>
            <View style={styles.statsCard(SIZES.height * 0.2232)}>
              <Text style={styles.statsTitle()}>Finished</Text>
              <Text style={styles.statsCount(SIZES.xxLarge)}>4</Text>
              <Text style={styles.completedActivities}>Completed activities</Text>
              <View style={styles.goalAchievedRow}>
                <Text style={styles.goalAchieved}>Goal achieved!</Text>
                <Ionicons
                  name='checkmark-circle'
                  size={18}
                  color={COLORS.green}
                />
              </View>
              <Text style={styles.goalStreak}>7-days streak</Text>
            </View>
            <View style={{ gap: SIZES.small }}>
              <View style={styles.statsCard(SIZES.height * 0.105)}>
                <Text style={styles.statsTitle(SIZES.small)}>Calories burned</Text>
                <Text style={styles.statsCount(SIZES.xLarge)}>
                  200 <Text style={styles.statsCountLabel}>kcal</Text>
                </Text>
              </View>
              <View style={styles.statsCard(SIZES.height * 0.105)}>
                <Text style={styles.statsTitle(SIZES.small)}>Time spent</Text>
                <Text style={styles.statsCount(SIZES.xLarge)}>
                  62 <Text style={styles.statsCountLabel}>minutes</Text>
                </Text>
              </View>
            </View>
          </View>

          {/* activies cards */}
          <Text style={styles.sectionTitle}>Activities</Text>
          <View>
            {/* did not use flatList since it only contains few cards */}
            {activitiesData.map((item) => (
              <ActivityCard
                key={item.id}
                activityName={item.activity}
                image={item.image}
                description={item.description}
                duration={item.duration}
                onPress={() => handleNavigate(item)}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView >
  );
};

export default ActivitiesScreen;
