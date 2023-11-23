import React from 'react';
import { Text, View, } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import STYLES from '../../styles/global.style';
import questionStyles from './styles/questions.style';
import { ChoiceCard, NextButton, BackButton } from '../../components';

const Question3 = () => {

  return (
    <SafeAreaView style={STYLES.container}>
      <View style={[STYLES.wrapper, questionStyles.layoutControlFullScreen]}>
        <View>
          <View style={questionStyles.questionWrapper}>
            <Text style={[questionStyles.question, questionStyles.header]}>
            How long do you usually{'\n'}need to get up from bed?
            </Text>
            <Text style={[
              questionStyles.questionSubtitle,
              questionStyles.skipText,
            ]}>
              You may tap next if you want to skip a question.
            </Text>
          </View>
          <ChoiceCard content='0 - 10 minutes' />
          <ChoiceCard content='10 - 20 minutes' />
          <ChoiceCard content='More than 20 minutes' />
        </View>
        <View style={questionStyles.buttonsRow}>
          <BackButton />
          <NextButton nextScreen='Question4' />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Question3;
