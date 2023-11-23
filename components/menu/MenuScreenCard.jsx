import { Text, View, Pressable, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles/menuScreenCard.style';

const MenuScreenCard = (props) => {
  const { image, label, onPress } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.card}
      activeOpacity={0.8}
    >
      <Text style={styles.label}>{label}</Text>
      <Image
        source={image}
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

export default MenuScreenCard;
