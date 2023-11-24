import {
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../../styles';
import { useNavigation } from '@react-navigation/native';


const NextButton = ({ nextScreen, disabled, addData }) => {
  const navigation = useNavigation();
  const handleBtn = () => {
    if(addData){
      addData()
    }
    navigation.navigate(nextScreen)
  } 
  return (
    <Pressable
      onPress={handleBtn}
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