import { Text, View, Pressable, } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { COLORS, SIZES } from '../../styles';
import { Ionicons } from '@expo/vector-icons';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import STYLES from '../../styles/global.style';
import styles from './styles/activityDetails.style';

const ActivityDetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { item } = route.params;
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReset, setIsReset] = useState(false);

  useEffect(() => {
    if (item.activity) {
      navigation.setOptions({
        headerTitle: item.activity,
      });
    }
  }, [item]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleTimerReset = () => {
    setIsReset(true);

    setTimeout(() => {
      setIsReset(false);
    }, 100);
  };

  return (
    <SafeAreaView
      edges={['right', 'bottom', 'left']}
      style={STYLES.container}
    >
      <View style={[STYLES.wrapper, { marginTop: SIZES.small }]}>
        <View style={[STYLES.sectionCard, { marginBottom: SIZES.xLarge }]}>
          <View style={styles.sectionHeader}>
            <Text style={styles.title}>{item.activity}</Text>
            <View style={styles.row}>
              <Ionicons
                name='time-outline'
                color={COLORS.gray}
                size={SIZES.medium + 2}
                style={styles.icon}
              />
              <Text style={styles.duration}>Duration: {item.duration} minutes</Text>
            </View>
            <View style={styles.row}>
              <Ionicons
                name='flame-outline'
                color={COLORS.gray}
                size={SIZES.medium + 2}
                style={styles.icon}
              />
              <Text style={styles.duration}>Calories to burn: 35 calories</Text>
            </View>
          </View>

          <Text style={styles.description}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita sed, tempore eaque quos dignissimos sequi. Hic minima repudiandae soluta fugit, doloremque iusto dolorum explicabo cupiditate tenetur consectetur blanditiis maiores omnis provident molestiae vel enim porro voluptatem culpa assumenda veniam repellat? Deleniti rerum eveniet deserunt ab.
          </Text>
        </View>

        {/* timer */}
        <View style={styles.timerWrapper}>
          <CountdownCircleTimer
            isPlaying={isPlaying}
            duration={item.duration * 60}
            key={isReset ? 'reset-key' : 'normal-key'}
            colors={COLORS.secondary}
            size={270}
          >
            {({ remainingTime }) => <Text style={styles.timerCount}>{formatTime(remainingTime)}</Text>}
          </CountdownCircleTimer>
          <View style={styles.timerBtnsRow}>
            <Pressable
              style={styles.timerBtn(COLORS.darkGray)}
              onPress={handleTimerReset}
            >
              <Text style={styles.timerBtnText}>reset</Text>
            </Pressable>
            <Pressable
              onPress={() => setIsPlaying(!isPlaying)}
              style={styles.timerBtn(isPlaying ? COLORS.yellow : COLORS.green2)}
            >
              <Text style={styles.timerBtnText}>
                {isPlaying ? 'Pause' : 'Start'}
              </Text>

            </Pressable>
          </View>
        </View>

      </View>
    </SafeAreaView>
  );
};

export default ActivityDetailsScreen;
