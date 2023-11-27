// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  initializeAuth,
  getReactNativePersistence,
  sendEmailVerification,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

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
  apiKey: "AIzaSyDGoaMaXA4gop6O5386cpZnYoQ5dteGU4Y",
  authDomain: "feemlife.firebaseapp.com",
  projectId: "feemlife",
  storageBucket: "feemlife.appspot.com",
  messagingSenderId: "255759737018",
  appId: "1:255759737018:web:a91552259b346f48b96283",
  measurementId: "G-E29N9X59VH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export {
  auth,
  database,
  createUserWithEmailAndPassword,
  sendEmailVerification,
};
