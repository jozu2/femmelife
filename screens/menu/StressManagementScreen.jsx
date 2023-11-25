import React, { useState, useRef } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import STYLES from '../../styles/global.style';
import styles from './styles/stressManagement.style';
import LottieView from 'lottie-react-native';
import { COLORS } from '../../styles';

const StressManagementScreen = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const animationRef = useRef(null);

  const toggleAnimation = () => {
    if (isPlaying) {
      animationRef.current.pause(); // Pause the animation
    } else {
      animationRef.current.play(); // Play the animation
    }
    setIsPlaying(!isPlaying); // Toggle the isPlaying state
  };

  return (
    <SafeAreaView style={STYLES.container}>
      <ScrollView >
        <View style={[STYLES.wrapper, { flex: 1 }]}>
          <Text style={styles.greeting}>Good Morning!</Text>
          <Text style={styles.recommendation}>Start your day with your daily quote.</Text>

          <View style={styles.quoteCard}>
            <Text style={styles.quoteText}>"Don't feel guilty doing what is best for yourself."</Text>
            <Image
              source={require('../../assets/images/meditation-3.png')}
              style={styles.quoteImg}
            />
          </View>

          <Text style={STYLES.sectionTitle}>Suggested For You</Text>

          <ScrollView
            horizontal
          
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.cardRow}>
              <TouchableOpacity
                onPress={() => { }}
                style={styles.suggestionCard}
                activeOpacity={0.7}
              >
                <Image
                  source={require('../../assets/images/spend-time-nature.png')}
                  style={styles.suggestionImg}
                />
                <Text style={styles.suggestionName}>Spend time in nature</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => { }}
                style={styles.suggestionCard}
                activeOpacity={0.7}
              >
                <Image
                  source={require('../../assets/images/talk-to-friend.png')}
                  style={styles.suggestionImg}
                />
                <Text style={styles.suggestionName}>Talk with your loved ones</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => { }}
                style={styles.suggestionCard}
                activeOpacity={0.7}
              >
                <Image
                  source={require('../../assets/images/reading-1.png')}
                  style={styles.suggestionImg}
                />
                <Text style={styles.suggestionName}>Read a book and limit screen time</Text>
              </TouchableOpacity>

            </View>
          </ScrollView>

          <Text style={STYLES.sectionTitle}>Your Goals Today</Text>
          <View style={styles.goalTodayCard}>
            <View>
              <Text style={styles.goalTitle}>No caffeine for today</Text>
              <Text style={styles.goalDesc}>Drink water only through out the day.</Text>
            </View>
            <Image
              source={require('../../assets/images/no-coffee.png')}
              style={styles.goalImg}
            />
          </View>

          <View style={styles.goalTodayCard}>
            <View>
              <Text style={styles.goalTitle}>Aim for 10,000 steps</Text>
              <Text style={styles.goalDesc}>Make this a habit daily for better heart health.</Text>
            </View>
            <Image
              source={require('../../assets/images/footprints.png')}
              style={styles.goalImg}
            />
          </View>

          <View style={styles.goalTodayCard}>
            <View>
              <Text style={styles.goalTitle}>Limit screen time</Text>
              <Text style={styles.goalDesc}>At least 4 to 5 hours and avoid social media</Text>
            </View>
            <Image
              source={require('../../assets/images/no-phone.png')}
              style={styles.goalImg}
            />
          </View>

          <Text style={STYLES.sectionTitle}>Breathing Exercise</Text>
          <View style={styles.animationWrapper}>
            <View style={styles.instructions}>
              <Text style={styles.intructionsText}>1. Sit or lie down comfortably.</Text>
              <Text style={styles.intructionsText}>2. Imagine a box with four equal sides.</Text>
              <Text style={styles.intructionsText}>3. Breathe in slowly for 4 counts, hold your breath for 4 counts, exhale slowly for 4 counts, and hold your breath for 4 counts.</Text>
              <Text style={styles.intructionsText}>4. Repeat for 5-10 minutes.</Text>
              <TouchableOpacity
                onPress={toggleAnimation}
                style={styles.startButton(isPlaying ? COLORS.yellow : COLORS.green2)}
                activeOpacity={0.7}
              >
                <Text style={styles.startButtonText}>{isPlaying ? 'Pause' : 'Start'}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.animation}>
              <LottieView
                ref={animationRef} // Set the ref for animation
                autoPlay={false} // Disable autoPlay
                loop
                source={require('../../assets/images/breathing-exercise.json')}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StressManagementScreen;
