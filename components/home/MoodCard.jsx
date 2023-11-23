import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, Pressable, Image } from 'react-native';
import { COLORS, SIZES } from '../../styles';

const MoodCard = ({ image, label, onPress }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(!isPressed)
    onPress
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.wrapper, isPressed ? styles.isPressed : null]}
    >
      <Image source={image} style={styles.image} />
      <Text style={[styles.label, isPressed ? styles.isPressedLabel : null]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default MoodCard;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small,
    width: SIZES.width * 0.1651,
    alignItems: 'center',
    paddingVertical: 6,
  },
  image: {
    width: 45,
    height: 45,
    resizeMode: 'cover',
    marginBottom: 4,
  },
  label: {
    color: COLORS.darkGray,
    fontFamily: 'bold',
    fontSize: SIZES.small,
    textAlign: 'center'
  },
  isPressed: {
    backgroundColor: '#FFB6C180',
  },
  isPressedLabel: {
    color: COLORS.secondary
  },
});
