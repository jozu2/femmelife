import React from 'react';
import {
  Text,
  View,
  ScrollView,
  Pressable,
  TouchableOpacity,
  Image,
  ActivityIndicator
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import STYLES from '../../styles/global.style';
import styles from './styles/sleepStats.style';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../styles';
import { SleepDataCard } from '../../components';

const SleepStatsScreen = () => {
  return (
    <SafeAreaView
      style={STYLES.container}
      edges={['right', 'left']} // exclude upper and bottom inset
    >
      <ScrollView>
        <View style={[STYLES.wrapper, { flex: 1 }]}>
          <Text style={[STYLES.sectionTitle, styles.title]}>Sleep schedule</Text>

          <View style={styles.idealSleepCard}>
            <View>
              <Text style={styles.idealSleepTitle}>Ideal hours of sleep</Text>
              <Text style={styles.idealSleepHrs}>8hrs 10mins</Text>
              <TouchableOpacity style={styles.learnMoreBtn}>
                <Text style={styles.learnMoreBtnTxt}>Learn more</Text>
                <Ionicons
                  name='chevron-forward'
                  color={COLORS.gray}
                  size={16}
                  style={styles.learnMoreChevron}
                />
              </TouchableOpacity>
            </View>
            <Image
              style={styles.learnMoreImg}
              source={require('../../assets/images/sleeping-img-2.png')}
            />
          </View>

          <Text style={STYLES.sectionTitle}>This week</Text>
          <View style={{ marginTop: 50 }}>
            <ActivityIndicator
              color={COLORS.secondary}
              size='small'
            />
          </View>
          <View>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
};

export default SleepStatsScreen;
