import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES } from '../../styles';
import styles from './styles/header.style';
import STYLES from '../../styles/global.style';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

import { auth, database } from '../../services/firebase';
import { doc, getDoc } from 'firebase/firestore';

const Header = () => {
  const navigation = useNavigation();
  const [formattedDate, setFormattedDate] = useState('');
  const [predictedPeriodDate, setPredictedPeriodDate] = useState('');

  useEffect(() => {
    const date = new Date();
    const predictedPeriodDate = new Date(date);
    predictedPeriodDate.setDate(date.getDate() + 3);

    const options = { weekday: 'long', month: 'long', day: 'numeric' }
    const formatted = date.toLocaleDateString('en-US', options);
    const formattedPredictedPeriodDate = predictedPeriodDate.toLocaleDateString('en-US', options);

    setFormattedDate(formatted);
    setPredictedPeriodDate(formattedPredictedPeriodDate);
  }, []);


  const [userInfo, setUserInfo] = useState('Juana Cruz');

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userId = auth.currentUser.uid;
        const userDocRef = doc(database, 'users', userId);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          setUserInfo(userData)
        }
      } catch (error) {
        console.error('Error fetching user role:', error);
      }
    };

  
      fetchUserInfo();
  }, []);

  return (
    <SafeAreaView>
      <View style={[
        STYLES.row,
        { gap: SIZES.xSmall, justifyContent: 'space-between' },
      ]}>
        <View style={[STYLES.row, { gap: SIZES.xSmall }]}>
          <Image
            source={require("../../assets/images/avatar.jpg")}
            style={styles.avatarImg}
          />
          <View>
            <Text style={styles.subtitle}>Hello,</Text>
            <Text style={styles.name}>{userInfo.name}</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.push('NotificationsScreen')}
        >
          <Ionicons name='notifications-outline' size={26} color={COLORS.lightBlack} />
        </TouchableOpacity>
      </View>
      <View style={styles.dateWrapper}>
        <Text style={styles.todayTitle}>Today</Text>
        <Text style={styles.todayDate}>{formattedDate}</Text>
      </View>
      <View style={styles.periodInfo}>
        <View style={styles.periodInfoText}>
          <Text style={styles.periodInfoSubtitle}>xxx</Text>
          <Text style={styles.periodInfoDate}>{predictedPeriodDate}</Text>
        </View>
        <Image
          source={require('../../assets/images/home-period-info.png')}
          style={styles.periodInfoImg}
        />
      </View>
    </SafeAreaView>
  )
};

export default Header;
