// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyYs3obD6qdDdsH2uVfdXd4pqnPvglL1Q",
  authDomain: "voda-d9085.firebaseapp.com",
  projectId: "voda-d9085",
  storageBucket: "voda-d9085.appspot.com",
  messagingSenderId: "1049711888918",
  appId: "1:1049711888918:web:19de15b14b96e268638337",
  measurementId: "G-7TERNKNCBL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
