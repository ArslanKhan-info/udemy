import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyC9W5Wbqb5tcDk1VI6Pi3q6hHcP0OsRA-k",
  authDomain: "serviceario-b3619.firebaseapp.com",
  projectId: "serviceario-b3619",
  storageBucket: "serviceario-b3619.appspot.com",
  messagingSenderId: "589880033877",
  appId: "1:589880033877:web:d66709c23733a9aa220adc",
  measurementId: "G-L72JSN8M1Q"
};

export const db = firebase.initializeApp(firebaseConfig).firestore(); 
const { Timestamp } = firebase.firestore;
export { Timestamp };