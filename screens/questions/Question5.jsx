import React from 'react';
import { Text, View, } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import STYLES from '../../styles/global.style';
import questionStyles from './styles/questions.style';
import { ChoiceCard, NextButton, BackButton } from '../../components';

const Question5 = () => {

  return (
    <SafeAreaView style={STYLES.container}>
      <View style={[STYLES.wrapper, questionStyles.layoutControlFullScreen]}>
        <View>
          <View style={questionStyles.questionWrapper}>
            <Text style={[questionStyles.question, questionStyles.header]}>
              When is the last time you{'\n'}had your menstrual period?
            </Text>
            <Text style={[
              questionStyles.questionSubtitle,
              questionStyles.skipText,
            ]}>
              You may tap next if you want to skip a question.
            </Text>
          </View>
          <ChoiceCard content='0 - 1 week' />
          <ChoiceCard content='2 weeks or more' />
          <ChoiceCard content='1 month or more' />
        </View>
        <View style={questionStyles.buttonsRow}>
          <BackButton />
          <NextButton nextScreen='Question6' />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Question5;
