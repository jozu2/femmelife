import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import STYLES from '../../styles/global.style';
import styles from './styles/welcome.style';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../styles';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={STYLES.container}>
      <View style={[STYLES.wrapper, styles.control]}>
        <View style={styles.contentWrapper}>
          <Image
            source={require("../../assets/images/welcome-screen-img.png")}
            style={styles.image}
          />
          <Text style={styles.title}>
            Femme <Text style={{ color: '#333333' }}>life</Text>
          </Text>
          <Text style={styles.subtitle}>
            Track your PCOS journey and menstrual cycle while nurturing your wellness.
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.replace('AuthStack')}
          style={styles.button}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Get started now</Text>
          <Ionicons
            name='chevron-forward-outline'
            color={COLORS.lightBlack}
            size={30}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
};

export default WelcomeScreen;