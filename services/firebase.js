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
  apiKey: "AIzaSyCkoBGqbtbAnuqKh6c0IGGnwhy2CsNCCRA",
  authDomain: "feml-f984e.firebaseapp.com",
  projectId: "feml-f984e",
  storageBucket: "feml-f984e.appspot.com",
  messagingSenderId: "398433689414",
  appId: "1:398433689414:web:5ccf783ac808a49b27cf47",
  measurementId: "G-RZ4FZX8780",
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
