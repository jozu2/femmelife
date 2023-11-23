import React from 'react';
import { Image, ScrollView, Text, View, Pressable } from 'react-native';
import styles from './styles/sleepTracker.style';
import { SafeAreaView } from 'react-native-safe-area-context';
import STYLES from '../../styles/global.style';
import { COLORS, SIZES } from '../../styles';
import { LineChart } from 'react-native-gifted-charts';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SleepDataCard } from '../../components';


const SleepTrackerScreen = () => {
  const navigation = useNavigation();
  const data = [
    { value: 8.1, label: 'Mon' },
    { value: 7.24, label: 'Tue' },
    { value: 8.0, label: 'Wed' },
    { value: 6.8, label: 'Thur' },
    { value: 7.8, label: 'Fri' },
    { value: 5, label: 'Sat' },
    { value: 6.41, label: 'Sun' },
  ];


  return (
    <SafeAreaView
      style={STYLES.container}
      edges={['right', 'left']} // exclude upper and bottom inset
    >
      <ScrollView scrollIndicatorInsets={{ top: 5 }}>
        {/* added flex of 1 for the scrollview below the bar graph */}
        <View style={[STYLES.wrapper, { flex: 1 }]}>
          <View>
            <Text style={[
              STYLES.sectionTitle,
              { marginBottom: 0, marginTop: SIZES.small }
            ]}>
              Average sleep time
            </Text>
            <Text style={styles.aveSleepTime}>7 hrs 48 mins</Text>
            <Text style={styles.aveSleepTimeDate}>Last 7 days | Nov 9-15, 2023</Text>
          </View>
          <View style={styles.barChartWrapper}>
            <LineChart
              data={data}
              maxValue={8}
              noOfSections={5}
              areaChart
              curved
              dataPointsColor={COLORS.secondary}
              startFillColor={COLORS.secondary}
              color={COLORS.secondary}
              startOpacity={0.8}
              endOpacity={0.5}
              // showVerticalLines
              showXAxisIndices
              xAxisIndicesColor={COLORS.secondary}
              verticalLinesColor={COLORS.lightGray3}
              rulesType='solid'
              rulesColor={COLORS.lightGray3}
              xAxisLabelTextStyle={styles.axisLabel}
              xAxisColor={COLORS.gray3}
              xAxisThickness={1}
              yAxisLabelSuffix='h'
              yAxisColor={COLORS.gray3}
              yAxisThickness={1}
              yAxisTextStyle={styles.axisLabel}
              initialSpacing={30}
              disableScroll
            />
          </View>
          <View style={[STYLES.sectionCard, styles.lastNightSleepCard]}>
            <View>
              <Text style={styles.lastNightSleepTitle}>Last night sleep</Text>
              <Text style={styles.lastNightSleepHrs}>8hrs 10mins</Text>
              <Text style={styles.lastNightSleepTime}>9:00 PM - 5:10 AM</Text>
            </View>
            <Image
              source={require("../../assets/images/sleeping-img.png")}
              style={styles.wakeUpImg}
            />
          </View>

          <Pressable
            onPress={() => navigation.push('SleepStatsScreen')}
            style={styles.dailySleepScheduleBtn}
          >
            <Text style={styles.dailySleepScheduleText}>Sleep schedule and data</Text>
            <Ionicons
              name='chevron-forward-outline'
              color={COLORS.gray}
              size={24}
            />
          </Pressable>

          <Text style={STYLES.sectionTitle}>Today's schedule</Text>
          <View style={[STYLES.sectionCard, styles.todayScheduleRow]}>
            <View>
              <Text style={styles.todayScheduleSectionTitle}>Bedtime in 6h 22m</Text>
              <Text style={styles.todayScheduleSectionSubtitle}>Schedule: 9:00 PM</Text>
            </View>
            <Image
              source={require('../../assets/images/sleeping-in-bed.png')}
              style={styles.todayScheduleImg}
            />
          </View>
          <View style={[STYLES.sectionCard, styles.todayScheduleRow]}>
            <View>
              <Text style={styles.todayScheduleSectionTitle}>Alarm in 9h 1m</Text>
              <Text style={styles.todayScheduleSectionSubtitle}>Wake up: 6:00 AM</Text>
            </View>
            <Image
              source={require('../../assets/images/alarm-clock.png')}
              style={styles.todayScheduleImg}
            />
          </View>



          {/* <Text style={STYLES.sectionTitle}>Sleep logs and data</Text>
          <View style={styles.sleepDataWrapper}>
            <SleepDataCard label='Sleep Schedule' data='10:00 PM - 6:00 AM' />
            <SleepDataCard label='Sleep Goal' data='8 hours' />
            <SleepDataCard label='Average Sleep Time' data='7.8 hours' />
          </View> */}
        </View>
      </ScrollView>
    </SafeAreaView >
  )
};

export default SleepTrackerScreen;
