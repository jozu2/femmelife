import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import STYLES from '../../styles/global.style';
import questionStyles from './styles/questions.style';
import { BackButton, NextButton } from '../../components';
import useUserDetails from '../../hooks/useUserDetails';
import { putUserName } from '../../context/actions/user';
import { useDispatch } from 'react-redux';

const Question1 = () => {
  const dispatch = useDispatch();
  const { name } = useUserDetails()

  // input validation for name, will resume this
  const isInputEmpty = () => {
    return name.trim === '';
  }

  return (
    <SafeAreaView style={STYLES.container}>
      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
      >
        <View style={[STYLES.wrapper, questionStyles.layoutControlCenter]}>
          <View style={questionStyles.questionWrapper}>
            <Text style={questionStyles.questionSubtitle}>Let's get to know each other!</Text>
            <Text style={questionStyles.question}>What would you like us to call you?</Text>
          </View>
          <TextInput
            value={name}
            onChangeText={(text) => dispatch(putUserName(text))}
            style={questionStyles.nameInput}
          />

          <View style={[questionStyles.buttonsRow, { justifyContent: 'center'}]}>
            <NextButton nextScreen='Age' />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  )
}

export default Question1;
