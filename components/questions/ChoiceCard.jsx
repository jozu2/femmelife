import React, { useState } from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import { COLORS, SIZES } from '../../styles';

const ChoiceCard = ({ content, number, onSelect }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handlePress = () => {
    setIsSelected(!isSelected);
    onSelect(content, !isSelected);
  };

  return (
    <Pressable
      onPress={handlePress}
      style={[
        styles.choiceCard,
        isSelected && styles.choiceCardSelected,
      ]}
    >
      <Text style={styles.choiceCardText}>{content}</Text>
    </Pressable>
  );
};

export default ChoiceCard;

const styles = StyleSheet.create({
  choiceCard: {
    backgroundColor: '#E6E6E6',
    borderRadius: SIZES.borderRadius,
    paddingVertical: SIZES.medium,
    paddingHorizontal: SIZES.medium - 2,
    marginBottom: SIZES.small,
  },
  choiceCardText: {
    color: COLORS.lightBlack,
    fontFamily: 'medium',
    fontSize: SIZES.medium,
  },
  choiceCardSelected: {
    backgroundColor: COLORS.primary,
  },
});
