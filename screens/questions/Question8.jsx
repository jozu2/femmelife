import React, { useState, useEffect } from 'react';
import { Text, View, } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import STYLES from '../../styles/global.style';
import questionStyles from './styles/questions.style';
import { ChoiceCard, NextButton, BackButton } from '../../components';
import { putUserSignOfPcos } from '../../context/actions/user';
import { useDispatch } from 'react-redux';
import useUserDetails from '../../hooks/useUserDetails';
import { auth, database } from '../../services/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
const Question8 = () => {
  const dispatch = useDispatch();
  const contents = [
    { content: 'To know when my period is coming', number: 1 },
    { content: 'To understand my chances of getting pregnant', number: 2 },
    { content: "I'm concern of my health in general", number: 4 },
    { content: "To know if my symptoms are normal", number: 5 },
    { content: "Something else", number: 6   },

  ];
  const [selectedChoice, setSelectedChoice] = useState(null);



  useEffect(() => {
      dispatch(putUserSignOfPcos(selectedChoice));
  }, [selectedChoice])

  const handleChoiceSelect = (number, isSelected) => {
    if (isSelected) {
      setSelectedChoice(number);
    } else {
      setSelectedChoice(null);
    }
  };

  const userDetail = useUserDetails()
  const userId = auth.currentUser.uid;


  const addPcosData = async () => {
    try {
      const userDocRef = doc(database, 'pcosData', userId);
      const userDocSnap = await getDoc(userDocRef);
  
      if (userDocSnap.exists()) {
        await updateDoc(userDocRef, {
          pcosUserData: userDetail
        });
        console.log('Data updated successfully!');
      }
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };





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
          <NextButton nextScreen='MainTabStack' disabled={false} addData={addPcosData} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Question8;
