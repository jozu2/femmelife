import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Alert,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import STYLES from '../../styles/global.style';
import questionStyles from './styles/questions.style';
import { NextButton, BackButton } from '../../components';
import { COLORS } from '../../styles';
import { putUserBmi } from '../../context/actions/user';
import { useDispatch } from 'react-redux';

const Question7 = () => {
  const [weight, setWeight] = useState('');
  const [heightFeet, setHeightFeet] = useState('');
  const [heightInches, setHeightInches] = useState('');
  const [bmi, setBmi] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(putUserBmi(bmi));
  }, [bmi])

  const calculateBMI = () => {
    if (!weight || !heightFeet || !heightInches) {
      Alert.alert('Value', 'Please fill in all fields.');
      return;
    }

    const weightKg = parseFloat(weight);
    const heightMeters = (parseFloat(heightFeet) * 0.3048) + (parseFloat(heightInches) * 0.0254);
    const calculatedBMI = (weightKg / (heightMeters * heightMeters)).toFixed(2);
    setBmi(calculatedBMI);
  };

  const handleReset = () => {
    setWeight('');
    setHeightFeet('');
    setHeightInches('');
    setBmi('');
  };

  return (
    <SafeAreaView style={STYLES.container}>
      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
      >
        <View style={[STYLES.wrapper, questionStyles.layoutControlCenter]}>
          <View style={questionStyles.questionWrapper}>
            <Text style={questionStyles.question}>What is your Body Mass Index?</Text>
          </View>
          <View style={questionStyles.inputRow}>
            <Text style={questionStyles.bmiInputLabel}>Your weight:</Text>
            <TextInput
              value={weight}
              onChangeText={(text) => setWeight(text)}
              style={[questionStyles.nameInput, { width: '71%' }]}
              placeholder='Kilograms'
              placeholderTextColor={COLORS.gray}
              keyboardType='numeric'
            />
          </View>
          <View style={questionStyles.inputRow}>
            <Text style={questionStyles.bmiInputLabel}>Your height:</Text>
            <TextInput
              value={heightFeet}
              onChangeText={(text) => setHeightFeet(text)}
              style={[questionStyles.nameInput, { width: '33%' }]}
              placeholder='Feet'
              placeholderTextColor={COLORS.gray}
              keyboardType='numeric'
            />
            <TextInput
              value={heightInches}
              onChangeText={(text) => setHeightInches(text)}
              style={[questionStyles.nameInput, { width: '33%' }]}
              placeholder='Inches'
              placeholderTextColor={COLORS.gray}
              keyboardType='numeric'
            />
          </View>
          <View style={questionStyles.inputRow}>
            <Text style={questionStyles.bmiInputLabel}>Your BMI:</Text>
            <View style={questionStyles.bmiBox}>
              <Text style={questionStyles.bmiValue}>{bmi}</Text>
              <TouchableOpacity onPress={handleReset}>
                <Text style={questionStyles.bmiResetBtn}>Reset</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            onPress={calculateBMI}
            style={questionStyles.calculateBmiBtn}
          >
            <Text style={questionStyles.calculateBmiText}>Calculate BMI</Text>
          </TouchableOpacity>

          <View style={questionStyles.buttonsRow}>
            <BackButton />
            <NextButton nextScreen='Question8' />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  )
}

export default Question7;
