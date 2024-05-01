// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAilR4WgWSTxYqrolPNO404Da7Er3WqhpU",
  authDomain: "farme-2dbfa.firebaseapp.com",
  projectId: "farme-2dbfa",
  storageBucket: "farme-2dbfa.appspot.com",
  messagingSenderId: "1041564041099",
  appId: "1:1041564041099:web:74c018d87389e222c4f98e",
  measurementId: "G-CWC5RT5W0D"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

console.log(app)