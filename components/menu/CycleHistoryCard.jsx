import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../styles';
import styles from './styles/cardHistoryCard.style';

const CycleHistoryCard = (props) => {
  const { month, length, status, startedDate } = props; // destructure


  const icon = status === 'abnormal' ? 'warning' : 'checkmark-circle';
  const iconColor = status === 'abnormal' ? COLORS.yellow : COLORS.green;

  return (
    <View>
      <View style={styles.wrapper}>
        <Text style={styles.month}>{month}</Text>
        <Text style={styles.periodLength}>{length} days</Text>
        <View style={styles.monthRow}>
          <Text style={styles.startedDate}>Started at {startedDate}</Text>
          <View style={styles.statusRow}>
            <Text style={styles.status}>{status}</Text>
            <Ionicons
              name={icon}
              color={iconColor}
              size={18}
            />
          </View>
        </View>
      </View>
      <View style={styles.divider}></View>
    </View>
  );
};

export default CycleHistoryCard;
