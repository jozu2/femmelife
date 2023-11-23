import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { COLORS, SIZES } from "../../styles/theme";
import STYLES from '../../styles/global.style';
import SafeAreaView from 'react-native-safe-area-view';

const Contacts = () => {
  return (
    <SafeAreaView style={STYLES.container}>
      <ScrollView>
        <View style={styles.wrapper}>
          <View style={STYLES.sectionCard}>
            <Text style={STYLES.sectionTitle}>Contact Us</Text>
            <Text style={[styles.contactInfo, { color: COLORS.black, marginBottom: 12 }]}>
              If you have any questions, feedback, or concerns, we'd love to hear from you! Feel free to reach out through the following channels:
            </Text>
            <Text style={styles.title}>Email:</Text>
            <Text style={[styles.contactInfo, { marginBottom: 10 }]}>info@femmelifeapp.com</Text>

            <Text style={styles.title}>Phone:</Text>
            <Text style={[styles.contactInfo, { marginBottom: 10 }]}>+63 (955) 123-4567</Text>

            <Text style={styles.title}>Address:</Text>
            <Text style={styles.contactInfo}>Femme Life Headquarters</Text>
            <Text style={styles.contactInfo}>123 Wellness Street</Text>
            <Text style={styles.contactInfo}>DHVSU, Bldg 12345</Text>
            <Text style={[styles.contactInfo, { marginBottom: 10 }]}>Bacolor, Pampanga, PH</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Contacts;

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: SIZES.medium,
    marginTop: SIZES.small,
  },
  title: {
    fontFamily: 'semibold',
    fontSize: SIZES.medium,
    lineHeight: 25,
    marginBottom: 2,
  },
  contactInfo: {
    color: COLORS.secondary,
    fontFamily: 'regular',
    fontSize: SIZES.medium,
    lineHeight: 25,
  },
});
