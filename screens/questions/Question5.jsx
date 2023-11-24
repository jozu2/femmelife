import React, { useState, useEffect } from 'react';
import { Text, View, } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import STYLES from '../../styles/global.style';
import questionStyles from './styles/questions.style';
import { ChoiceCard, NextButton, BackButton } from '../../components';
import { putUserLastPeriod } from '../../context/actions/user';
import { useDispatch } from 'react-redux';
import useUserDetails from '../../hooks/useUserDetails';
const Question5 = () => {
  const dispatch = useDispatch();
  const contents = [
    { content: '0 - 1 week', number: 1 },
    { content: '2 weeks or more', number: 2 },
    { content: '1 month or more', number: 3 },
  ];
  const [selectedChoice, setSelectedChoice] = useState(null);

  useEffect(() => {
      dispatch(putUserLastPeriod(selectedChoice));
  }, [selectedChoice])

  const handleChoiceSelect = (number, isSelected) => {
    if (isSelected) {
      setSelectedChoice(number);
    } else {
      setSelectedChoice(null);
    }
  };

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
          {contents.map(({ content, number }) => (
            <ChoiceCard
              key={number}
              content={content}
              number={number}
              onSelect={handleChoiceSelect}
            />
          ))}
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
