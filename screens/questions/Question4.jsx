import React, { useState, useEffect } from 'react';
import { Text, View, } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import STYLES from '../../styles/global.style';
import questionStyles from './styles/questions.style';
import { ChoiceCard, NextButton, BackButton } from '../../components';
import { putUserSymptoms } from '../../context/actions/user';
import { useDispatch } from 'react-redux';
import useUserDetails from '../../hooks/useUserDetails';
const Question4 = () => {
  const dispatch = useDispatch();
  const contents = [
    { content: 'Irregular period or no period at all', number: 1 },
    { content: 'Diffulty in getting pregnant', number: 2 },
    { content: 'Excessive hair growth', number: 3 },
    { content: 'Weight gain', number: 4 },
    { content: 'Thinning hair or hair loss', number: 5 },
    { content: 'Oily skin or acne', number: 6 },
    { content: 'Constant mood change / Uncontrollable emotions', number: 7 },
  ];

  const [selectedChoice, setSelectedChoice] = useState(null);

  useEffect(() => {
      dispatch(putUserSymptoms(selectedChoice));
  }, [selectedChoice])

  const handleChoiceSelect = (number, isSelected) => {
    if (isSelected) {
      setSelectedChoice(number);
    } 
  };
  
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
          <NextButton nextScreen='Question5' />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Question4;
