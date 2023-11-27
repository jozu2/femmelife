import React, { useState, useRef, useEffect } from 'react';
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import STYLES from '../../styles/global.style';
import styles from './styles/stressManagement.style';
import LottieView from 'lottie-react-native';
import { COLORS } from '../../styles';
import { auth, database } from '../../services/firebase';
import { FieldValue , doc, getDoc, onSnapshot, updateDoc } from 'firebase/firestore';
import { returnKeyLabel } from 'deprecated-react-native-prop-types/DeprecatedTextInputPropTypes';
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
  const [pressedData, setPressedData] = useState(null);
  const [stressData, setStressData] = useState(null);
  const [temporaryData, setTemporaryData] = useState(null)
const addActivitiesData = async (title, description) => {
  const userId = auth.currentUser.uid;
    try {
      const userDocRef = doc(
        database,
        'stressManagement',
        userId,
      );
      const userDocSnap = await getDoc(userDocRef);
      if (userDocSnap.exists()) {
      await updateDoc(userDocRef, {
        [title]: description,
      });
      
      if(description=== 0){
        Alert.alert('Great Job','You did very well  ')
      }else{
        
        alert('Successfully added!')
      }
        console.log('Data updated successfully!');
      }
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  
  useEffect(() => {
    const userId = auth.currentUser.uid;
    const userDocRef = doc(database, 'stressManagement', userId);
  
    const unsubscribe = onSnapshot(userDocRef, (userDocSnap) => {
      try {
        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          setStressData(userData);
        }
      } catch (error) {
        console.error('Error fetching user role:', error);
      }
    });
  
    return () => unsubscribe();
  }, []);
  const [stressDataArray, setStressDataArray] = useState([]);

  useEffect(() => {
      if(stressData === null)return
        const dataArray = Object.entries(stressData).map(([key, value]) => ({ key, value }));
      setStressDataArray(dataArray);
  }, [stressData]);

  console.log('yyyyy', temporaryData)
  console.log('xxxx',stressDataArray.length)


  return (
    <SafeAreaView style={STYLES.container}>
      <ScrollView>
        <View style={[STYLES.wrapper, { flex: 1 }]}>
          <Text style={styles.greeting}>Good Morning!</Text>
          <Text style={styles.recommendation}>
            Start your day with your daily quote.
          </Text>

          <View style={styles.quoteCard}>
            <Text style={styles.quoteText}>
              "Don't feel guilty doing what is best for yourself."
            </Text>
            <Image
              source={require('../../assets/images/meditation-3.png')}
              style={styles.quoteImg}
            />
          </View>

          <Text style={STYLES.sectionTitle}>Suggested For You</Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.cardRow}>
              <TouchableOpacity
                onPress={() => {Alert.alert(
                  'Add this goal?',
                  'Are you sure you want to add this to your goal today?',
                  [
                    { text: 'No', style: 'cancel' },
                    { text: 'Yes', onPress: () => {
                    const data = ('spendTime') 
                    const desc = ('Spend my time in nature') 
                    addActivitiesData(data, desc)
                  
                  }}
                  ],
                );}}
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
                onPress={() => {Alert.alert(
                  'Add this goal?',
                  'Are you sure you want to add this to your goal today?',
                  [
                    { text: 'No', style: 'cancel' },
                    { text: 'Yes', onPress: () => {
                    const data = ('TalkWith') 
                    const desc = ('Talk with my loved ones') 
                    addActivitiesData(data, desc)
                  
                  }}
                  ],
                );}}
                style={styles.suggestionCard}
                activeOpacity={0.7}
              >
                <Image
                  source={require('../../assets/images/talk-to-friend.png')}
                  style={styles.suggestionImg}
                />
                <Text style={styles.suggestionName}>
                  Talk with your loved ones
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                 onPress={() => {Alert.alert(
                  'Add this goal?',
                  'Are you sure you want to add this to your goal today?',
                  [
                    { text: 'No', style: 'cancel' },
                    { text: 'Yes', onPress: () => {
                    const data = ('readBook') 
                    const desc = (' Read a book and limit my screen time') 
                    addActivitiesData(data, desc)
                 
                  }}
                  ],
                );}}
                style={styles.suggestionCard}
                activeOpacity={0.7}
              >
                <Image
                  source={require('../../assets/images/reading-1.png')}
                  style={styles.suggestionImg}
                />
                <Text style={styles.suggestionName}>
                  Read a book and limit screen time
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>

          <Text style={STYLES.sectionTitle}>Your Goals Today</Text>



          {stressDataArray.length !== 0 && stressDataArray.map((data, index) => (
        <TouchableOpacity style={ data.value !== 0 ? styles.goalTodayCard : {display:'none'}} key={index}  onPress={() => {if(data.value === 0)   return       
          Alert.alert(
          'Done?',
          'Is this goal finished?',
          [
            { text: 'No', style: 'cancel' },
            { text: 'Yes', onPress: () => {
             const noData = 0
         addActivitiesData(data.key, noData)
          }}
          ],
        );}}>
          <View>
            <Text style={ [styles.goalTitle, {fontWeight: '500', fontSize: 18}]}>{data.value === 0 ? '' : data.value}</Text>
          </View>
        </TouchableOpacity>
      ))}
  
  
          {/* <View style={styles.goalTodayCard}>
            <View>
              <Text style={styles.goalTitle}>No caffeine for today</Text>
              <Text style={styles.goalDesc}>
                Drink water only through out the day.
              </Text>
            </View>
            <Image
              source={require('../../assets/images/no-coffee.png')}
              style={styles.goalImg}
            />
          </View>
          <View style={styles.goalTodayCard}>
            <View>
              <Text style={styles.goalTitle}>Aim for 10,000 steps</Text>
              <Text style={styles.goalDesc}>
                Make this a habit daily for better heart health.
              </Text>
            </View>
            <Image
              source={require('../../assets/images/footprints.png')}
              style={styles.goalImg}
            />
          </View>

          <View style={styles.goalTodayCard}>
            <View>
              <Text style={styles.goalTitle}>Limit screen time</Text>
              <Text style={styles.goalDesc}>
                At least 4 to 5 hours and avoid social media
              </Text>
            </View>
            <Image
              source={require('../../assets/images/no-phone.png')}
              style={styles.goalImg}
            />
          </View>  */}

          <Text style={STYLES.sectionTitle}>Breathing Exercise</Text>
          <View style={styles.animationWrapper}>
            <View style={styles.instructions}>
              <Text style={styles.intructionsText}>
                1. Sit or lie down comfortably.
              </Text>
              <Text style={styles.intructionsText}>
                2. Imagine a box with four equal sides.
              </Text>
              <Text style={styles.intructionsText}>
                3. Breathe in slowly for 4 counts, hold your breath for 4
                counts, exhale slowly for 4 counts, and hold your breath for 4
                counts.
              </Text>
              <Text style={styles.intructionsText}>
                4. Repeat for 5-10 minutes.
              </Text>
              <TouchableOpacity
                onPress={toggleAnimation}
                style={styles.startButton(
                  isPlaying ? COLORS.yellow : COLORS.green2
                )}
                activeOpacity={0.7}
              >
                <Text style={styles.startButtonText}>
                  {isPlaying ? 'Pause' : 'Start'}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.animation}>
              <LottieView
                ref={animationRef} // Set the ref for animation
                autoPlay={false} // Disable autoPlay
                loop
                animationData={require('../../assets/images/breathing-exercise.json')}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StressManagementScreen;
