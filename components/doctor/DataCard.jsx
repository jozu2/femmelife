import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../../styles';

const DataCard = ({ onPress, data, label }) => {
  const displayData = Array.isArray(data) ? data.join(', ') : data;

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.wrapper}
      onPress={onPress}
    >
      <Text style={styles.data}>{displayData}</Text>
      <Text style={styles.dataLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

export default DataCard;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small,
    marginBottom: SIZES.small,
    paddingTop: SIZES.medium,
    paddingBottom: SIZES.small + 2,
    paddingHorizontal: SIZES.small + 2,
    width: '48.6%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  data: {
    color: COLORS.secondary,
    fontFamily: 'bold',
    fontSize: SIZES.xLarge * 1.4,
  },
  dataLabel: {
    color: COLORS.gray,
    fontFamily: 'semibold',
    fontSize: SIZES.medium,
  },
});
