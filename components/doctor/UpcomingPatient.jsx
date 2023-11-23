import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../../styles';
import { Ionicons } from '@expo/vector-icons';

const UpcomingPatient = (props) => {
  const { name, date, time, phoneNumber, email, agenda, id, onPress, image } = props;

  return (
    <View style={styles.wrapper}>
      <View style={[styles.row, { justifyContent: 'space-between' }]}>
        <View style={styles.row}>
          <Image
            source={image}
            style={styles.image}
          />
          <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.date}>{date}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UpcomingPatient;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small,
    marginBottom: SIZES.medium,
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.small + 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SIZES.medium,
  },
  image: {
    height: 45,
    width: 45,
    borderRadius: 1000,
  },
  name: {
    color: COLORS.lightBlack,
    fontFamily: 'bold',
    fontSize: SIZES.medium,
    marginBottom: 4,
  },
  date: {
    color: COLORS.gray,
    fontSize: SIZES.small + 1,
  },
});
