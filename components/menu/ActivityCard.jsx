import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../styles';
import STYLES from '../../styles/global.style';


const ActivityCard = ({ onPress, image, activityName, description, duration }) => (
    <Pressable
      style={[STYLES.sectionCard, styles.row]}
      onPress={onPress}
    >
      <Image
        source={image}
        style={styles.image}
      />
      <View>
        <Text style={styles.activityName}>{activityName}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.duration}>{duration} mins</Text>
      </View>
    </Pressable>
);

export default ActivityCard;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 8,
  },
  image: {
    height: 55,
    width: 55,
    marginTop: 8,
    marginRight: 4,
  },
  activityName: {
    color: COLORS.lightBlack,
    fontFamily: 'bold',
    fontSize: SIZES.medium + 2,
    marginBottom: 4,
  },
  description: {
    color: COLORS.lightBlack,
    fontFamily: 'medium',
  },
  duration: {
    color: COLORS.gray3,
    fontFamily: 'medium',
  },
});
