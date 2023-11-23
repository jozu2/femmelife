import React from 'react';
import { Text, View, } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import STYLES from '../../styles/global.style';
import questionStyles from './styles/questions.style';
import { ChoiceCard, NextButton, BackButton } from '../../components';

const Question4 = () => {

  return (
    <SafeAreaView style={STYLES.container}>
      <View style={[STYLES.wrapper, questionStyles.layoutControlFullScreen]}>
        <View>
          <View style={questionStyles.questionWrapper}>
            <Text style={[questionStyles.question, questionStyles.header]}>
              What are the symptoms are{'\n'}you experiencing related to PCOS?
            </Text>
            <Text style={[
              questionStyles.questionSubtitle,
              questionStyles.skipText,
            ]}>
              Choose all the symptoms you're experiencing.
            </Text>
          </View>
          <ChoiceCard content='Irregular period or no period at all' />
          <ChoiceCard content='Diffulty in getting pregnant' />
          <ChoiceCard content='Excessive hair growth' />
          <ChoiceCard content='Weight gain' />
          <ChoiceCard content='Thinning hair or hair loss' />
          <ChoiceCard content='Oily skin or acne' />
          <ChoiceCard content='Constant mood change / Uncontrollable emotions' />
        </View>
        <View style={questionStyles.buttonsRow}>
          <BackButton />
          <NextButton nextScreen='Question5' />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Question4;
