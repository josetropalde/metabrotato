// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMGZBR_6ovG0kvjm1MQvlUtiwKCMyFsdU",
  authDomain: "metabrotato-8e150.firebaseapp.com",
  projectId: "metabrotato-8e150",
  storageBucket: "metabrotato-8e150.appspot.com",
  messagingSenderId: "117421006262",
  appId: "1:117421006262:web:0ff35564eee50be148f517",
  measurementId: "G-SNJLPJKKEF"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
export { db, auth };

