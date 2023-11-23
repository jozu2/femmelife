import React, { useState, useEffect } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import STYLES from '../../styles/global.style';
import { COLORS, SIZES } from '../../styles';
import { BarChart } from 'react-native-gifted-charts';
import styles from './styles/waterStats.style';

const WaterStatsScreen = () => {
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    const date = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' }
    const formatted = date.toLocaleDateString('en-US', options)
    setFormattedDate(formatted);
  }, []);

  const barData = [
    { value: 1400, label: 'Mon', frontColor: COLORS.gray2 },
    { value: 1700, label: 'Tue' },
    { value: 2100, label: 'Wed' },
    { value: 1900, label: 'Thur' },
    { value: 1200, label: 'Fri', frontColor: COLORS.gray2 },
    { value: 1900, label: 'Sat' },
    { value: 2000, label: 'Sun' }
  ];

  return (
    <SafeAreaView
      style={STYLES.container}
      edges={['right', 'bottom', 'left']} // exclude top inset to remove space
    >
      <ScrollView >
        <View style={[STYLES.wrapper, { marginTop: SIZES.small, flex: 1 }]}>
          <Text style={[STYLES.sectionTitle, { marginBottom: 4 }]}>Weekly statistics</Text>
          <Text style={styles.weekDate}>Nov 9-15, 2023</Text>
          <View style={styles.barGraphWrapper}>
            <BarChart
              data={barData}
              frontColor={COLORS.secondary}
              barWidth={22}
              barBorderRadius={4}
              yAxisThickness={1}
              yAxisColor={COLORS.gray3}
              xAxisThickness={0}
              maxValue={2000}
              noOfSections={5}
              hideRules
              yAxisLabelContainerStyle={styles.yAxisLabel}
              yAxisLabelWidth={48}
              yAxisLabelSuffix='ml'
              yAxisTextStyle={styles.axisLabel}
              xAxisLabelTextStyle={styles.axisLabel}
              showYAxisIndices
              yAxisIndicesColor={COLORS.gray3}
              initialSpacing={32}
              spacing={24}
              disableScroll
            />
          </View>

          <Text style={[STYLES.sectionTitle, { marginBottom: 4 }]}>Today's progress</Text>
          <Text style={styles.weekDate}>{formattedDate}</Text>
          <View style={styles.todayRow}>
            <Text style={styles.todaysText('medium')}>Progress: 10%</Text>
            <Text style={styles.todaysText('semibold')}>200ml | 2000ml</Text>
          </View>

          <Text style={STYLES.sectionTitle}>Most used for intake</Text>
          <View style={STYLES.sectionCard}>
            <View style={styles.mostUsedRow}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  source={require('../../assets/images/water-glass.png')}
                  style={styles.waterImg}
                />
                <Text style={[styles.todaysText('medium')]}>200ml</Text>
              </View>
              <Text style={styles.todaysText('semibold')}>1x</Text>
            </View>
            <View style={styles.divider}></View>

            <View style={styles.mostUsedRow}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  source={require('../../assets/images/water-bottle.png')}
                  style={styles.waterImg}
                />
                <Text style={[styles.todaysText('medium')]}>0ml</Text>
              </View>
              <Text style={styles.todaysText('semibold')}>0x</Text>
            </View>
            <View style={styles.divider}></View>

            <View style={styles.mostUsedRow}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  source={require('../../assets/images/cup.png')}
                  style={styles.waterImg}
                />
                <Text style={[styles.todaysText('medium')]}>0ml</Text>
              </View>
              <Text style={styles.todaysText('semibold')}>0x</Text>
            </View>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WaterStatsScreen;
