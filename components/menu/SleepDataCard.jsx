import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS, SIZES } from '../../styles';
import STYLES from '../../styles/global.style';

const SleepDataCard = ({ label, data }) => {
  return (
    <View style={styles.sleepDataRow}>
      <Text style={styles.sleepDataText('medium')}>{label}</Text>
      <Text style={styles.sleepDataText('semibold')}>{data}</Text>
    </View>
  );
};

export default SleepDataCard

const styles = StyleSheet.create({
  sleepDataRow: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small,
    marginBottom: SIZES.medium,
    paddingVertical: SIZES.medium,
    paddingHorizontal: SIZES.medium + 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sleepDataText: (fontFamily) => ({
    color: COLORS.lightBlack,
    fontFamily: fontFamily,
    fontSize: SIZES.medium,
  }),
});