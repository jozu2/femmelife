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

const Age = () => {
  const [name, setName] = useState('');

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
            <Text style={questionStyles.question}>How old are you?</Text>
          </View>
          <TextInput
            value={name}
            onChangeText={(text) => setName(text)}
            style={questionStyles.nameInput}
            inputMode='numeric'
          />
          <View style={questionStyles.buttonsRow}>
            <BackButton />
            <NextButton nextScreen='Question2' />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  )
}

export default Age;
