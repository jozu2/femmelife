import { Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import { useNavigation } from '@react-navigation/native';
import STYLES from '../../styles/global.style';
import styles from './styles/onboarding.style';
import { COLORS } from '../../styles';
import { Ionicons } from "@expo/vector-icons";


const OnboardingScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={STYLES.container}>
      <View style={[STYLES.wrapper, styles.layoutControl]}>
        <View>
          <Image
            source={require("../../assets/images/onboarding-img-1.png")}
            style={styles.image}
          />
          <View style={styles.textWrapper}>
            <Text style={styles.title}>Embark on Your{'\n'}Wellness Journey</Text>
            <Text style={styles.subtitle}>Your holistic wellness journey begins here.{'\n'}Track your PCOS, understand your menstrual{'\n'}cycle, and embrace overall well-being.</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.push('Onboarding2')}
          style={styles.button}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Next</Text>
          <Ionicons
            name='chevron-forward-outline'
            color={COLORS.white}
            size={26}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
