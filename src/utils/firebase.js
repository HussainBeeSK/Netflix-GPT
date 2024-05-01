// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaOJpAviLh9Ci7Rg2X6kXYhFuMZYQOq6s",
  authDomain: "netflixgpt-668e8.firebaseapp.com",
  projectId: "netflixgpt-668e8",
  storageBucket: "netflixgpt-668e8.appspot.com",
  messagingSenderId: "553084174305",
  appId: "1:553084174305:web:3c794dd712a16fa2155ca0",
  measurementId: "G-B0S4N2W1E4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);