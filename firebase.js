// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import '@firebase/firestore'
import{getFirestore} from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyAaH4zu6XmYDXommWrf5GhhpmCn6MOcD_s",
  authDomain: "mobileproject-v1.firebaseapp.com",
  projectId: "mobileproject-v1",
  storageBucket: "mobileproject-v1.appspot.com",
  messagingSenderId: "1054041552718",
  appId: "1:1054041552718:web:46edc482db8af7d799901f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication=getAuth(app);
export const db = getFirestore(app);
export default app;
