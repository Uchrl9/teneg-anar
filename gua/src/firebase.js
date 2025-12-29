// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4hT5XKLywyBd2oWTV-Rj6lnF7yoIyzHk",
  authDomain: "datingapp-hit.firebaseapp.com",
  projectId: "datingapp-hit",
  storageBucket: "datingapp-hit.firebasestorage.app",
  messagingSenderId: "636326390674",
  appId: "1:636326390674:web:4f001b168efee941c22f4b",
  measurementId: "G-85VKJLKM75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);