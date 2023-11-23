import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { useNavigation } from '@react-navigation/native';
import STYLES from '../../styles/global.style';
import styles from './settings.style';
import { Ionicons } from '@expo/vector-icons';
import ToggleSwitch from 'toggle-switch-react-native';
import { COLORS } from '../../styles/theme';
import { doc, getDoc } from 'firebase/firestore';
import { auth, database } from './../../services/firebase';

const SettingsScreen = (props) => {
  const { userImage, name, email, dateJoined } = props;
  const navigation = useNavigation();
  const [isOnToggle, setIsOnToggle] = useState(true);

  const navigate = (screen) => {
    navigation.navigate(screen)
  };


  const [userInfo, setUserInfo] = useState('');


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
  const requestAccountDeletion = () => {
    Alert.alert(
      'Send Request?',
      'Are you sure you want to request account deletion?',
      [
        { text: 'No', style: 'cancel' },
        {
          text: 'Yes', onPress: () => {
            Alert.alert(
              'Request sent successfully',
              'We will reach you out through your personal email for details.'
            )
          },
        },
      ],
    );
  };

  const signOut = () => {
    Alert.alert(
      'Continue sign out?',
      'Are you sure you want to sign out?',
      [
        { text: 'No', style: 'cancel' },
        { text: 'Yes', onPress: () => auth.signOut(), },
      ],
    );
  };

  return (
    <SafeAreaView
      edges={['right', 'left']} // omitted top and bottom to remove inset
      style={STYLES.container}
    >
      <ScrollView style={STYLES.wrapper}>
        <View style={styles.header}>
          <Image
            source={require('../../assets/images/avatar.jpg')}
            style={styles.userImage}
          />
          <View style={styles.userInfoRow}>
            <Text style={styles.name}>{userInfo.name}</Text>
            <Text style={styles.email}>{userInfo.email}</Text>
          </View>

          <TouchableOpacity style={styles.editBtn}>
            <Ionicons
              name='create-outline'
              size={22}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionLabel}>Date joined</Text>
          <Text style={styles.sectionLabel}>{userInfo.dateCreated}</Text>
        </View>

        <TouchableOpacity
          onPress={() => navigate('Contacts')}
          activeOpacity={0.7}
          style={styles.sectionCard}

        >
          <Text style={styles.sectionLabel}>Contact us</Text>
          <Ionicons name='chevron-forward' size={21} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigate('AboutApp')}
          activeOpacity={0.7}
          style={styles.sectionCard}
        >
          <Text style={styles.sectionLabel}>About Femme Life</Text>
          <Ionicons name='chevron-forward' size={21} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigate('TermsAndConditions')}
          activeOpacity={0.7}
          style={styles.sectionCard}
        >
          <Text style={styles.sectionLabel}>Terms and conditions</Text>
          <Ionicons name='chevron-forward' size={21} />
        </TouchableOpacity>



        <Pressable
          style={styles.sectionCard}
          onPress={requestAccountDeletion}
        >
          <Text style={styles.sectionLabel}>Request account deletion</Text>
          <Ionicons name='chevron-forward' size={21} />
        </Pressable>

        <Pressable
          style={styles.sectionCard}
          onPress={() => setIsOnToggle(!isOnToggle)}
        >
          <Text style={styles.sectionLabel}>Notifications</Text>
          <ToggleSwitch
            onToggle={() => setIsOnToggle(!isOnToggle)}
            isOn={isOnToggle}
            onColor={COLORS.green2}
            size='medium'
          />
        </Pressable>

        <TouchableOpacity
          onPress={signOut}
          style={styles.sectionCard}
          activeOpacity={0.7}
        >
          <Text style={styles.signOutText}>Sign out</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  )
};

export default SettingsScreen;
