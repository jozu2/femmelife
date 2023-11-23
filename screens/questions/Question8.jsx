import React from 'react';
import { Text, View, } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import STYLES from '../../styles/global.style';
import questionStyles from './styles/questions.style';
import { ChoiceCard, NextButton, BackButton } from '../../components';

const Question8 = () => {

  return (
    <SafeAreaView style={STYLES.container}>
      <View style={[STYLES.wrapper, questionStyles.layoutControlFullScreen]}>
        <View>
          <View style={questionStyles.questionWrapper}>
            <Text style={[questionStyles.question, questionStyles.header]}>
              Why are your tracking your cycle and signs of PCOS?
            </Text>
            <Text style={[
              questionStyles.questionSubtitle,
              questionStyles.skipText,
            ]}>
              Choose as many as you like.
            </Text>
          </View>
          <ChoiceCard content='To know when my period is coming' />
          <ChoiceCard content='To understand my chances of getting pregnant' />
          <ChoiceCard content="I'm concern of my health in general" />
          <ChoiceCard content='To know if my symptoms are normal' />
          <ChoiceCard content='Something else' />
        </View>
        <View style={questionStyles.buttonsRow}>
          <BackButton />
          <NextButton nextScreen='MainTabStack' />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Question8;
