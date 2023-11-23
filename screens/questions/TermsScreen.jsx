import { Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import { useNavigation } from '@react-navigation/native';
import STYLES from '../../styles/global.style';
import { COLORS } from '../../styles';
import styles from './styles/terms.style';
import Checkbox from 'expo-checkbox';


const TermsScreen = () => {
  const navigation = useNavigation();
  const [isChecked, setIsChecked] = useState(false);

  return (
    <SafeAreaView style={STYLES.container}>
      <View style={[STYLES.wrapper, styles.layoutControl]}>
        <View style={styles.content}>
          <Text style={styles.welcomeText}>Welcome to Femme Life!</Text>
          <Text style={styles.screenTitle}>Terms of Privacy</Text>
          <View style={styles.termsWrapper}>
            <Text style={styles.termsTitle}>User Data</Text>
            <Text style={styles.termsContent}>
              We collect and analyze your user data to create a personalized experience. This encompasses personal data such as your name, email address, and profile information, along with health-related data provided for tracking and customization. Additionally, we analyze your usage data to better understand how you interact with our app.
            </Text>
          </View>
          <View style={styles.termsWrapper}>
            <Text style={styles.termsTitle}>Content Personalization</Text>
            <Text style={styles.termsContent}>
              We utilize your data to personalize content and recommendations, which includes customized health and wellness content, personalized tracking and insights, as well as notifications and reminders.
            </Text>
          </View>
          <View style={styles.termsWrapper}>
            <Text style={styles.termsTitle}>Security and Privary</Text>
            <Text style={styles.termsContent}>
              The security of your data is of utmost importance to us. We implement robust measures to protect it; however, please be aware that no data transmission over the internet is entirely secure.
            </Text>
          </View>
        </View>

        <View style={styles.footer}>
          <View style={styles.checkBoxRow}>
            <Checkbox
              value={isChecked}
              onValueChange={setIsChecked}
              color={isChecked ? COLORS.secondary : undefined}
              style={styles.checkBox}
            />
            <Text style={[styles.termsContent, { fontFamily: 'medium' }]}>
              I have read and agree to the terms of privacy and user data and content personalization.
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Question1')}
            style={[styles.button, isChecked ? styles.buttonEnabled : null]}
            disabled={!isChecked}
          >
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TermsScreen;
