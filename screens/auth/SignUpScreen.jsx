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
import { auth, database, createUserWithEmailAndPassword } from '../../services/firebase';
import { setDoc, doc } from 'firebase/firestore';

const SignUpScreen = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    const date = new Date();

    const options = { weekday: 'long', month: 'long', day: 'numeric' }
    const formatted = date.toLocaleDateString('en-US', options);

    setFormattedDate(formatted);
  }, []);

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setLoading(true);
      const userId = auth.currentUser?.uid;
      await setDoc(doc(database, "users", userId), {
        name: name,
        dateCreated: formattedDate,
        userId: userId,
        email: email,
        mensDate: null,
      })

      await setDoc(doc(database, "pcosData", userId), {
        name: name,
        userId: userId,
        isSet: false,
        pcosUserData: null
      })
      console.log('Signed up with' + auth.currentUser?.email);
      alert('Signed up successfully!');
    } catch (error) {
      alert(error.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

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
              secureTextEntry
              placeholder='Password'
              placeholderTextColor={COLORS.lightGray}
              style={styles.inputField}
            />
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
