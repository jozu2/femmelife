// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { createUserWithEmailAndPassword } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: 'AIzaSyBJRwslt_TZU8OXEzegxzz_LUL9XVVrT5I',
//   authDomain: 'femme-life.firebaseapp.com',
//   projectId: 'femme-life',
//   storageBucket: 'femme-life.appspot.com',
//   messagingSenderId: '625019939390',
//   appId: '1:625019939390:web:217fa2635cf2ee27b1ff6f',
//   measurementId: 'G-D1D6VP888L',
// };
// const firebaseConfig = {
//   apiKey: 'AIzaSyCzyxHFLv1q5Z7MSfrkQZq7G6WoSkPvem8',
//   authDomain: 'feem-5ce28.firebaseapp.com',
//   projectId: 'feem-5ce28',
//   storageBucket: 'feem-5ce28.appspot.com',
//   messagingSenderId: '167170392331',
//   appId: '1:167170392331:web:f6c448e06f711cac14e20e',
// };

const firebaseConfig = {
  apiKey: 'AIzaSyDbVMtdCl8aw-XQF1V7zWdYSmfsiZKEIuE',
  authDomain: 'femme-9bb99.firebaseapp.com',
  projectId: 'femme-9bb99',
  storageBucket: 'femme-9bb99.appspot.com',
  messagingSenderId: '663625208691',
  appId: '1:663625208691:web:93741f78a7eccbe1906b06',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { auth, database, createUserWithEmailAndPassword };
