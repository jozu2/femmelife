import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../../styles';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const AppointmentCard = (props) => {
  const { onPress, date, time, } = props;

  return (
    <TouchableOpacity onPress={onPress} style={styles.card} activeOpacity={0.7}>
      <View style={styles.row}>
        <MaterialCommunityIcons name='calendar-clock' size={18} color={COLORS.lightBlack} />
        <Text style={[styles.date, { marginRight: 4}]}>{date}</Text>
        <Text style={styles.date}>{time}</Text>
      </View>
      {/* <Ionicons name='chevron-forward' size={20} color={COLORS.lightBlack} /> */}
    </TouchableOpacity>
  );
};

export default AppointmentCard;

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#E1E1E1',
    borderRadius: SIZES.small,
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.small + 2,
    marginTop: SIZES.small,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  date: {
    color: COLORS.lightBlack,
    fontFamily: 'medium',
    fontSize: SIZES.medium,
  },
});
