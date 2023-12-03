import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { COLORS, SIZES } from '../../styles';
import { Image } from 'react-native';

const MealCard = (props) => {
  // destructured the props.
  const {
    onPress,
    label,
    name,
    name2,
    servings,
    calories,
    carbs,
    protein,
    img,
    fat
  } = props;

  return (
    <Pressable
      onPress={onPress}
      style={styles.wrapper}
    >
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>

      <View style={styles.mealInfo}>
      <Text style={styles.label}>{label}</Text>

        <Text style={styles.mealName}>{`${name}`}</Text>
        <Text style={[styles.mealName,{display: name2 === '' ? 'none' : 'flex'}]}>{`${name2}`}</Text>
        <Text style={styles.mealServings}>{servings} servings</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.mealCalories}>{calories} calories</Text>
          {/* <Text style={styles.mealNameInfo}>{carbs}g carbs</Text>
          <Text style={styles.mealNameInfo}>{protein}g protein</Text>
          <Text style={styles.mealNameInfo}>{fat}g fat</Text> */}
        </View>
        <Text></Text>
      </View>


      <Image source={{uri: img}} style={{width: 100, height: 100, borderRadius: 12}}/>

      </View>
    </Pressable>
  )
};

export default MealCard;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small,
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.small + 2,
    width: SIZES.width * 0.92,
    justifyContent: 'space-between'
  },
  label: {
    color: COLORS.secondary,
    fontFamily: 'bold',
    fontSize: SIZES.large,
    marginBottom: SIZES.small,
  },
  mealInfo: {
    //
  },
  mealName: {
    color: COLORS.lightBlack,
    fontFamily: 'semibold',
    fontSize: SIZES.medium,
  },
  mealServings: {
    color: COLORS.gray3,
    fontFamily: 'medium',
    marginBottom: 8,
  },
  mealCalories: {
    color: COLORS.secondary,
    fontFamily: 'semibold',
    fontSize: SIZES.medium - 1
  },
  mealNameInfo: {
    color: COLORS.gray3,
    fontFamily: 'medium',
    fontSize: SIZES.medium - 1,
  },
});
