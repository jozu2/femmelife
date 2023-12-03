import {
  Text,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Pressable,
  ActivityIndicator,
  Alert
} from 'react-native';
import React, { useEffect, useState } from 'react';
import STYLES from '../../styles/global.style';
import styles from './styles/signUpScreen.style';
import { COLORS } from '../../styles';
import Checkbox from 'expo-checkbox';
import { auth, database, createUserWithEmailAndPassword, sendEmailVerification } from '../../services/firebase';
import { setDoc, doc } from 'firebase/firestore';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formattedDate, setFormattedDate] = useState('');

  const navigation = useNavigation()
  useEffect(() => {
    const date = new Date();

    const options = { weekday: 'long', month: 'long', day: 'numeric' }
    const formatted = date.toLocaleDateString('en-US', options);

    setFormattedDate(formatted);
  }, []);

  const signUp = async () => {
    try {
      setLoading(true);

     await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      await sendEmailVerification(user);

if(user !== null){
 
      
      const userId = auth.currentUser?.uid;
      await setDoc(doc(database, "users", userId), {
        name: name,
        dateCreated: formattedDate,
        userId: userId,
        email: email,
        mensDate: null,
        role: 'user'
      })
      await setDoc(doc(database, "sleepTracker", userId), {
        name: name,
        wakeup: null,
        bedtime: null,
   
      })
      await setDoc(doc(database, "pcosData", userId), {
        name: name,
        userId: userId,
        isSet: false,
        pcosUserData: null
      })
      await setDoc(doc(database, "medicineData", userId), {
        name: name,
      })
      await setDoc(doc(database, "activitiesData", userId), {
        name: name,
        userId: userId,
        totTimeSpent: 0,
        totalActivities: 0,
        totCalories: 0,
        waterIntake: 0,
      })
      await setDoc(doc(database, "mealPlan", userId), {
        name: name,
        userId: userId,
  
      })
      await setDoc(doc(database, "stressManagement", userId), {
        spendTime: 0
      })
      console.log('Signed up with' + auth.currentUser?.email);
      Alert.alert('Signed up successfully! ','Please check your email for verification. ');
      if(user.emailVerified === false){
        auth.signOut()
        navigation.goBack()
      }
    }
    } catch (error) {
      alert(error.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const [showPassword, setShowPassword] = useState(true);
  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={100}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container} // custom container styles for keyboard avoiding view 
    >
      {/* used scrollview for the keyboard avoiding view */}
      <ScrollView
        style={STYLES.wrapper}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={require('../../assets/images/signup-img.png')}
          style={styles.image}
        />
        <Text style={styles.title}>Get started today</Text>
        <View style={styles.inputFieldWrapper}>
          <View style={styles.inputFieldGroup}>
            {/* <Text style={styles.inputFieldErrorMessage}>* Enter your full name</Text> */}
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              placeholder='Full name'
              placeholderTextColor={COLORS.lightGray}
              style={styles.inputField}
            />
          </View>
          <View style={styles.inputFieldGroup}>
            {/* <Text style={styles.inputFieldErrorMessage}>* Enter a valid email address</Text> */}
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder='Email'
              placeholderTextColor={COLORS.lightGray}
              style={styles.inputField}
            />
          </View>
          <View style={styles.inputFieldGroup}>
            {/* <Text style={styles.inputFieldErrorMessage}>* 8-16 characters with at least one uppercase letter and a symbol.</Text> */}
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={showPassword}
              placeholder='Password'
              placeholderTextColor={COLORS.lightGray}
              style={styles.inputField}
            />
                   {showPassword &&     <Ionicons
              style={{position: 'absolute', right: 20, top: 10}}
                  name='eye'
                  color={'gray'}
                  onPress={handleShowPassword}
                  size={32}
                />}
             {!showPassword && <Ionicons
              style={{position: 'absolute', right: 20, top: 10}}
                  name='eye-off'
                  color={'gray'}
                  onPress={handleShowPassword}
                  size={32}
                />}
          </View>
        </View>
        <View style={styles.checkBoxRow}>
          <Checkbox
            value={isChecked}
            onValueChange={setIsChecked}
            color={isChecked ? COLORS.secondary : undefined}
            style={styles.checkBox}
          />
          <Text style={styles.termsText}>
            By signing up with Femme Life, you agree with our terms and privacy policies and  conditions.
          </Text>
        </View>
        <Pressable
          onPress={signUp}
          style={[styles.signUpBtn, isChecked ? styles.signUpBtnEnabled : null]}
          disabled={!isChecked}
        >
          {loading ? <ActivityIndicator size='small' color={COLORS.secondary} /> :
            <Text style={styles.signUpBtnText}>Sign up</Text>}
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView >
  );
};

export default SignUpScreen;
