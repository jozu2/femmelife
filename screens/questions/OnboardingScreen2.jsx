import { Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import { useNavigation } from '@react-navigation/native';
import STYLES from '../../styles/global.style';
import styles from './styles/onboarding2.style';
import { COLORS } from '../../styles';
import { Ionicons } from "@expo/vector-icons";



const OnboardingScreen2 = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={STYLES.container}>
      <View style={[STYLES.wrapper, styles.layoutControl]}>
        <View>
          <Image
            source={require("../../assets/images/onboarding-img-2.png")}
            style={styles.image}
          />
          <View style={styles.textWrapper}>
            <Text style={styles.title}>Structure Your Day,{'\n'}Achieve Your Goals</Text>
            <Text style={styles.subtitle}>Effortlessly plan and organize your day{'\n'}with Femme Life. Set goals, follow preset{'\n'}plans, and boost productivity and wellness.</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Terms')}
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

export default OnboardingScreen2;
