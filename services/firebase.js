// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJRwslt_TZU8OXEzegxzz_LUL9XVVrT5I",
  authDomain: "femme-life.firebaseapp.com",
  projectId: "femme-life",
  storageBucket: "femme-life.appspot.com",
  messagingSenderId: "625019939390",
  appId: "1:625019939390:web:217fa2635cf2ee27b1ff6f",
  measurementId: "G-D1D6VP888L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { auth, database };
