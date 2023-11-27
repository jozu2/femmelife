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
