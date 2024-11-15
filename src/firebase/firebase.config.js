// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ1P5FDMTcKgYb-1sF4jtEHMWqKvburtg",
  authDomain: "dragon-news-8019a.firebaseapp.com",
  projectId: "dragon-news-8019a",
  storageBucket: "dragon-news-8019a.firebasestorage.app",
  messagingSenderId: "691652825967",
  appId: "1:691652825967:web:c5ab1e69d04aacb9ac4e9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);