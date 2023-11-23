import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES } from '../../styles';
import { Ionicons } from '@expo/vector-icons';

const BackButton = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.goBack()}
      style={styles.backButton}
    >
      <Ionicons
        name='chevron-back-outline'
        size={26}
        color={COLORS.lightGray}
        style={styles.icon}
      />
    </Pressable>
  )
};

export default BackButton;

const styles = StyleSheet.create({
  backButton: {
    borderRadius: 50,
    borderWidth: 2,
    borderColor: COLORS.lightGray,
    paddingVertical: SIZES.small + 2,
    width: SIZES.width * 0.19,
    marginTop: SIZES.xxLarge,
    marginBottom: SIZES.medium,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute', // prevent the parent from expanding when increasing ionicons size.
  },
});
