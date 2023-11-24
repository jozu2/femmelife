import React, { useState, useEffect } from 'react';
import { Text, View, } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import STYLES from '../../styles/global.style';
import questionStyles from './styles/questions.style';
import { ChoiceCard, NextButton, BackButton } from '../../components';
import { putUserDiabetes } from '../../context/actions/user';
import { useDispatch } from 'react-redux';
const Question6 = () => {
  const dispatch = useDispatch();
  const contents = [
    { content: 'Yes', number: 1 },
    { content: 'No', number: 2 },
    { content: 'Not Sure', number: 3 },
  ];
  const [selectedChoice, setSelectedChoice] = useState(null);

  useEffect(() => {
      dispatch(putUserDiabetes(selectedChoice));
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
              Do you have Diabetes?
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
          <NextButton nextScreen='Question7' />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Question6;
