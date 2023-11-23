import React, { useCallback, memo } from 'react';
import {
  Text,
  View,
  Alert,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { COLORS, SIZES } from '../../styles';
import isEmpty from 'lodash/isEmpty';

const MedicineCard = (props) => {
  const { item } = props;

  const buttonPressed = useCallback(() => {
    Alert.alert('Show me more');
  }, []);

  const itemPressed = useCallback(() => {
    Alert.alert(item.title);
  }, []);

  if (isEmpty(item)) {
    return (
      <View style={styles.emptyItem}>
        <Text style={styles.emptyItemText}>No Events Planned Today</Text>
      </View>
    );
  }

  return (
    <TouchableOpacity onPress={itemPressed} style={styles.item}>
      <View>
        <Text style={styles.itemHourText}>{item.hour}</Text>
        <Text style={styles.itemDurationText}>{item.duration}</Text>
      </View>
      <Text style={styles.itemTitleText}>{item.title}</Text>
      <View style={styles.itemButtonContainer}>
        <Button color={COLORS.gray} title={'Info'} onPress={buttonPressed} />
      </View>
    </TouchableOpacity>
  );
};

export default memo(MedicineCard);

const styles = StyleSheet.create({
  item: {
    padding: 20,
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray3,
    flexDirection: 'row'
  },
  itemHourText: {
    color: COLORS.black,
  },
  itemDurationText: {
    color: COLORS.gray,
    fontSize: SIZES.small,
    marginTop: 4,
    marginLeft: 4
  },
  itemTitleText: {
    color: COLORS.black,
    marginLeft: SIZES.medium,
    fontFamily: 'bold',
    fontSize: SIZES.medium,
  },
  itemButtonContainer: {
    flex: 1,
    alignItems: 'flex-end'
  },
  emptyItem: {
    paddingLeft: 20,
    height: 52,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray3,
  },
  emptyItemText: {
    color: COLORS.gray3,
    fontSize: 14
  }
});
