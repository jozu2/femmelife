import {
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../../styles';
import { useNavigation } from '@react-navigation/native';


const NextButton = ({ nextScreen, disabled }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate(nextScreen)}
      style={styles.nextButton}
      activeOpacity={0.8}
      disabled={disabled}
    >
      <Text style={styles.nextButtonText}>Next</Text>
    </Pressable>
  );
};

export default NextButton;

const styles = StyleSheet.create({
  nextButton: {
    backgroundColor: COLORS.secondary,
    borderRadius: 50,
    paddingVertical: SIZES.small + 2,
    width: SIZES.width * 0.70,
    marginTop: SIZES.xxLarge,
    marginBottom: SIZES.medium,
  },
  nextButtonText: {
    color: COLORS.white,
    fontFamily: 'semibold',
    fontSize: SIZES.medium,
    textAlign: 'center'
  },
})