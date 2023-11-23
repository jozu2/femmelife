import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS, SIZES } from '../../styles';
import STYLES from '../../styles/global.style';
import { Ionicons } from '@expo/vector-icons';

const WaterDataCard = ({ time, data }) => {
  return (
    <View>
      <View style={styles.waterDataRow}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons
            name='time-outline'
            size={SIZES.medium}
            color={COLORS.lightBlack}
            style={{ marginRight: 4, marginTop: 2 }}
          />
          <Text style={styles.waterDataText('regular')}>{time}</Text>
        </View>
        <Text style={styles.waterDataText('semibold')}>{data}</Text>
      </View>
      <View style={styles.divider}></View>
    </View>
  );
};

export default WaterDataCard;

const styles = StyleSheet.create({
  waterDataRow: {
    borderRadius: SIZES.small,
    paddingHorizontal: 8,
    paddingVertical: SIZES.small,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  waterDataText: (fontFamily) => ({
    color: COLORS.lightBlack,
    fontFamily: fontFamily,
    fontSize: SIZES.medium,
  }),
  divider: {
    height: 1,
    backgroundColor: COLORS.lightGray2,
    marginHorizontal: 8,
  },
});
