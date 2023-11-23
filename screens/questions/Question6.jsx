import React from 'react';
import { Text, View, } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import STYLES from '../../styles/global.style';
import questionStyles from './styles/questions.style';
import { ChoiceCard, NextButton, BackButton } from '../../components';

const Question6 = () => {

  return (
    <SafeAreaView style={STYLES.container}>
      <View style={[STYLES.wrapper, questionStyles.layoutControlFullScreen]}>
        <View>
          <View style={questionStyles.questionWrapper}>
            <Text style={[questionStyles.question, questionStyles.header]}>
              Do you have Diabetes?
            </Text>
            <Text style={[
              questionStyles.questionSubtitle,
              questionStyles.skipText,
            ]}>
              You may tap next if you want to skip a question.
            </Text>
          </View>
          <ChoiceCard content='Yes' />
          <ChoiceCard content='No' />
          <ChoiceCard content='Not sure' />
        </View>
        <View style={questionStyles.buttonsRow}>
          <BackButton />
          <NextButton nextScreen='Question7' />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Question6;
