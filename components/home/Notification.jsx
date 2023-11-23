import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../../styles';

const Notification = ({ icon, title, description, isRead }) => {
  return (
    <View style={styles.wrapper}>
      <Ionicons
        name='restaurant-outline'
        size={30}
        color={COLORS.secondary}
      />
      <View>
        <Text style={styles.title}>Don't forget to take your dinner!</Text>
        <Text style={styles.description}>Meal for tonight: Fried Tilapia with Rice</Text>
      </View>
      <View style={styles.dot}></View>
    </View>
  )
}

export default Notification

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small,
    marginBottom: SIZES.small,
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.small + 2,
    flexDirection: 'row',
    gap: SIZES.medium,
    alignItems: 'center'
  },
  title: {
    fontFamily: 'semibold',
    fontSize: SIZES.medium,
    marginBottom: 2,
  },
  description: {
    color: COLORS.gray,
    fontFamily: 'medium',
  },
  dot: {
    backgroundColor: COLORS.red,
    borderRadius: 50,
    height: 8,
    width: 8,
    position: 'absolute',
    right: 12,
    top: SIZES.xLarge + 6,
  },
})