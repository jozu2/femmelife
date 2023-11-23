import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { COLORS, SIZES } from "../../styles/theme";
import STYLES from '../../styles/global.style';
import SafeAreaView from 'react-native-safe-area-view';

const TermsAndConditions = () => {
  return (
    <SafeAreaView style={STYLES.container}>
      <ScrollView>
        <View style={styles.wrapper}>
          <View style={STYLES.sectionCard}>
            <Text style={STYLES.sectionTitle}>Terms and Conditions of Use</Text>
            <Text style={[styles.description, { marginBottom: 4 }]}>
              Welcome to Femme Life! These terms and conditions outline the rules and regulations for the use of the Femme Life mobile application.
            </Text>
            <Text style={styles.description}>
              By accessing this app, we assume you accept these terms and conditions. Do not continue to use Femme Life if you do not agree to all the terms and conditions stated on this page.
              {'\n'}
            </Text>
            <Text style={styles.title}>
              The following terminology applies to these Terms and Conditions:
            </Text>

            <Text style={[styles.description, { marginBottom: 4 }]}>
              1. User, You, and Your refer to you, the person accessing this app and accepting these terms and conditions.
            </Text>
            <Text style={[styles.description, { marginBottom: 4 }]}>
              2. Femme Life, We, Our, and Us refer to the Femme Life mobile application.
            </Text>
            <Text style={styles.description}>
              3. Services refers to the features and functions provided by Femme Life.
              {'\n'}
            </Text>

            <Text style={styles.title}>License to Use</Text>
            <Text style={styles.description}>
              Femme Life grants you a personal, non-transferable, non-exclusive license to use the app strictly in accordance with these terms.
              {'\n'}
            </Text>

            <Text style={styles.title}>User Restrictions</Text>
            <Text style={[styles.description, { marginBottom: 4 }]}>You must not:</Text>
            <Text style={[styles.description, { marginBottom: 4 }]}>1. Republish material.</Text>
            <Text style={[styles.description, { marginBottom: 4 }]}>2. Sell, rent, or sub-license material.</Text>
            <Text style={[styles.description, { marginBottom: 4 }]}>3. Reproduce, duplicate, or copy material.</Text>
            <Text style={styles.description}>4. Redistribute content.{'\n'}</Text>

            <Text style={styles.title}>Privacy</Text>
            <Text style={styles.description}>
              Your use of Femme Life is also governed by our Privacy Policy. Please review our Privacy Policy, which outlines our practices regarding your personal information.
              {'\n'}
            </Text>

            <Text style={styles.title}>Content Liability</Text>
            <Text style={styles.description}>
              We shall not be held responsible for any content that appears on Femme Life. By using the app, you agree to be fully responsible for any and all content posted by you and any consequences that may arise.
              {'\n'}
            </Text>

            <Text style={styles.title}>Termination</Text>
            <Text style={styles.description}>
              We reserve the right to terminate or suspend your access to Femme Life immediately, without prior notice or liability, for any reason whatsoever.
              {'\n'}
            </Text>

            <Text style={styles.title}>Changes to Terms</Text>
            <Text style={styles.description}>
              We reserve the right to revise these terms at any time without notice. By using Femme Life, you agree to be bound by the current version of these terms.
            </Text>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TermsAndConditions

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: SIZES.medium,
    marginTop: SIZES.small,
  },
  title: {
    fontFamily: 'semibold',
    fontSize: SIZES.medium,
    lineHeight: 25,
    marginBottom: 4,
  },
  description: {
    fontFamily: 'regular',
    fontSize: SIZES.medium,
    lineHeight: 25,
  },
});
