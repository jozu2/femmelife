import React from 'react';
import { Text, View, } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import STYLES from '../../styles/global.style';
import questionStyles from './styles/questions.style';
import { BackButton, ChoiceCard, NextButton } from '../../components';

const Question2 = () => {
  return (
    <SafeAreaView style={STYLES.container}>
      <View style={[STYLES.wrapper, questionStyles.layoutControlFullScreen]}>
        <View>
          <View style={questionStyles.questionWrapper}>
            <Text style={[questionStyles.question, questionStyles.header]}>
              How long do you usually{'\n'}sleep at night?
            </Text>
            <Text style={[
              questionStyles.questionSubtitle,
              questionStyles.skipText,
            ]}>
              You may tap next if you want to skip a question.
            </Text>
          </View>
          <ChoiceCard content='Less than 6 hours' />
          <ChoiceCard content='6 - 8 hours' />
          <ChoiceCard content='More than 8 hours' />
        </View>
        <View style={questionStyles.buttonsRow}>
          <BackButton />
          <NextButton nextScreen='Question3' />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Question2;
