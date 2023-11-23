import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { COLORS, SIZES } from "../../styles/theme";
import STYLES from '../../styles/global.style';
import SafeAreaView from 'react-native-safe-area-view';

const AboutApp = () => {
  return (
    <SafeAreaView style={STYLES.container}>
      <ScrollView>
        <View style={styles.wrapper}>
          <View style={STYLES.sectionCard}>
            <Text style={STYLES.sectionTitle}>About Femme Life</Text>
            <Text style={styles.description}>
              Femme Life is a capstone project dedicated to improving women's health and well-being. This app offers a variety of helpful features. It helps track conditions like PCOS and provides personalized insights about menstrual cycles. Femme Life also gives users personalized health plans to support their well-being journey.
              {'\n'}{'\n'}
              But it's more than just a health app. Femme Life is like a supportive community. Users can focus on their wellbeing and mental health through helpful resources and activities. The app is designed to be easy to use, making it simple for anyone to take charge of their health.
              {'\n'}{'\n'}
              Femme Life is not just about health conditions; it also helps users stay hydrated by tracking their water intake. It's like a friendly companion that provides useful information and tips for a healthier lifestyle. It is not just an app – it's a friendly guide for women to lead a healthier and happier life, created with care.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutApp;

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: SIZES.medium,
    marginTop: SIZES.small,
  },
  description: {
    fontFamily: 'regular',
    fontSize: SIZES.medium,
    lineHeight: 25,
  },
});
