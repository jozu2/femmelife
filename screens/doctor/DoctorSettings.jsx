import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import { auth, db } from '../../services/firebase';
import styles from './styles/doctorSettings.style';
import SafeAreaView from 'react-native-safe-area-view';
import STYLES from '../../styles/global.style';
import ToggleSwitch from 'toggle-switch-react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../styles';
import { Ionicons } from '@expo/vector-icons';

const DoctorSettings = () => {
  const navigation = useNavigation();
  const [isOnToggle, setIsOnToggle] = useState(true);

  const navigate = (screen) => {
    navigation.navigate(screen)
  };

  const signOut = () => {
    Alert.alert(
      'Continue sign out?',
      'Are you sure you want to sign out?',
      [
        { text: 'No', style: 'cancel' },
        { text: 'Yes', onPress: () => { auth.signOut() }, },
      ],
    );
  };

  return (
    <SafeAreaView style={STYLES.container}>
      <ScrollView>
        <View style={styles.wrapper}>
          <View style={styles.header}>
            <Image
              source={require('../../assets/images/doctor1.png')}
              style={styles.userImage}
            />
            <View style={styles.userInfoRow}>
              <Text style={styles.name}>Josefina Dela Cruz</Text>
              <Text style={styles.email}>Testdoctor@dhvsu.med.com</Text>
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
            <Text style={styles.sectionLabel}>November 7, 2023</Text>
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

          <TouchableOpacity
            style={styles.sectionCard}
            onPress={() => setIsOnToggle(!isOnToggle)}
            activeOpacity={0.7}
          >
            <Text style={styles.sectionLabel}>Notifications</Text>
            <ToggleSwitch
              onToggle={() => setIsOnToggle(!isOnToggle)}
              isOn={isOnToggle}
              onColor={COLORS.green2}
              size='medium'
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={signOut} style={styles.sectionCard} >
            <Text style={styles.signOutText}>Sign out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default DoctorSettings;
