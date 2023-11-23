import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import SafeAreaView from 'react-native-safe-area-view';
import STYLES from '../../styles/global.style';
import styles from "./styles/loginScreen.style";
import { COLORS } from '../../styles/theme';
import { Ionicons } from '@expo/vector-icons';
import { auth } from '../../services/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';


const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async () => {
    try {
      if (!email.trim() || !password.trim()) {
        Alert.alert(
          'Input Error',
          'Please enter both email and password.',
          [{ text: 'Got it', }]
        );
        return;
      }
      await signInWithEmailAndPassword(auth, email, password);
      setLoading(true);
    } catch (error) {
      let errorMessage = "Sign in failed. Please check your credentials and try again.";

      if (error.code === 'auth/user-not-found' || error.code === 'auth/invalid-email') {
        errorMessage = 'Invalid email address or user not found.';
      } else if (error.code === 'auth/wrong-password') {
        errorMessage = 'Invalid password.';
      }

      alert(errorMessage);
      console.error('Login failed:', error.message);
    } finally {
      setLoading(false);
    }
  };


  return (
    <SafeAreaView style={STYLES.container}>
      {loading ? (
        <ActivityIndicator
          size='large'
          color={COLORS.secondary}
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        />) : (
        <TouchableWithoutFeedback
          onPress={() => Keyboard.dismiss()}
        >
          <View style={STYLES.wrapper}>
            <Image
              source={require("../../assets/images/login-img.png")}
              style={styles.image}
            />
            <Text style={styles.title}>Hi there, welcome back!</Text>
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder='Email or username'
              placeholderTextColor={COLORS.gray}
              style={styles.inputBox}
            />
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry
              placeholder='Password'
              placeholderTextColor={COLORS.gray}
              style={styles.inputBox}
            />
            <TouchableOpacity style={{ width: '40%', alignSelf: 'flex-end' }}>
              <Text style={styles.forgotPasswordBtn}>Forgot your password?</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={login}
              style={styles.loginButton}
              activeOpacity={0.8}
            >
              <Text style={styles.loginButtonText}>Login now</Text>
            </TouchableOpacity>

            <Text style={styles.socialLoginTitle}>or</Text>
            <View style={styles.socialLogin}>
              <TouchableOpacity
                onPress={() => navigation.replace('QuestionsStack')}
                style={styles.socialLoginBtn}
                activeOpacity={0.8}
              >
                <Ionicons
                  name='logo-apple'
                  size={22}
                />
                <Text style={styles.socialLoginBtnText}>Sign up with Apple</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.replace('QuestionsStack')}
                style={styles.socialLoginBtn}
                activeOpacity={0.8}
              >
                <Image
                  source={require("../../assets/icons/google.png")}
                  style={styles.googleIcon}
                />
                <Text style={styles.socialLoginBtnText}>Sign up with Google</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              activeOpacity={1}
              onPress={() => navigation.navigate('SignUp')}
            >
              <Text style={styles.registerAccountBtn}>
                Don't have an account yet? <Text style={styles.registerAccountBtnAccent}>Register now</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      )}
    </SafeAreaView >
  );
};

export default LoginScreen;
