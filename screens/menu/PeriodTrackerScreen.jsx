import React from 'react';
import { Pressable, Text, View, ScrollView } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { SafeAreaView } from 'react-native-safe-area-context';
import STYLES from '../../styles/global.style';
import styles from './styles/periodTracker.style';
import { COLORS, SIZES } from '../../styles';
import { CycleHistoryCard } from '../../components';

// temporary data for samples
const cycleHistoryData = [
  {
    month: 'September',
    length: '28',
    startedDate: 'Sept 4',
    status: 'normal',
  },
  {
    month: 'August',
    length: '29',
    startedDate: 'August 6',
    status: 'normal',
  },
  {
    month: 'July',
    length: '26 ',
    startedDate: 'July 9',
    status: 'normal',
  },
  {
    month: 'June',
    length: '35',
    startedDate: 'June 2',
    status: 'abnormal',
  },
  {
    month: 'May',
    length: '31',
    startedDate: 'April 30',
    status: 'normal',
  },
];

const PeriodTrackerScreen = () => {
  return (
    <SafeAreaView
      edges={['right', 'bottom', 'left']} // remove inset on the top if the header is shown.
      style={STYLES.container}
    >
      <ScrollView showsVerticalScrollIndicator={false} style={{ overflow: 'visible' }}>
        <View style={STYLES.wrapper}>
          {/* calendar section */}
          <Calendar
            style={styles.calendar}
            onDayPress={() => { }}
            theme={{
              todayTextColor: COLORS.primaryDarker,
              textDayFontFamily: 'regular',
            }}
            hideArrows={false}
            enableSwipeMonths={true}
          />
          {/* period info graph */}
          <View style={styles.periodInfo}>
            <View style={styles.periodInfoTextWrapper}>
              <Text style={styles.periodInfoTitle}>Period coming in</Text>
              <Text style={styles.periodInfoDays}>3 days</Text>
            </View>
            <Pressable
              style={styles.periodEditBtn}
              onPress={() => { }} // to be filled up...
            >
              <Text style={styles.periodEditBtnText}>Edit period date</Text>
            </Pressable>
          </View>

          {/* Period info logs and history */}
          <Text style={[STYLES.sectionTitle, { marginTop: SIZES.xLarge }]}>
            My period logs and insights
          </Text>
          <View style={STYLES.sectionCard}>
            <Text style={[STYLES.label, { fontSize: SIZES.large + 2 }]}>Cycle history</Text>
            {cycleHistoryData.map((cycle, index) => (
              <CycleHistoryCard
                key={index}
                month={cycle.month}
                length={cycle.length}
                startedDate={cycle.startedDate}
                status={cycle.status}
              />
            ))}
          </View>
          <View style={styles.sectionCard}>
            <Text style={STYLES.label}>Cycle symptoms</Text>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PeriodTrackerScreen;
