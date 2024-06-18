// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseconfig = {
  apiKey: "AIzaSyAcMuZI1OhT57Haw_qkmvvYM4HVX4axcTs",
  authDomain: "benchmark-444.firebaseapp.com",
  projectId: "benchmark-444",
  storageBucket: "benchmark-444.appspot.com",
  messagingSenderId: "151931137988",
  appId: "1:151931137988:web:1cb51eb0ba6cc7ff603e91",
  measurementId: "G-QX5WN2ZFX9"
};

// Initialize Firebase
export const app = initializeApp(firebaseconfig);
// const analytics = getAnalytics(app);


export const auth = getAuth(app);
export const db = getFirestore(app);
