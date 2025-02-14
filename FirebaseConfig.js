// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZOHJnoX3oG6Fg93UEHIHGWOb_hZDirl4",
  authDomain: "receipeapp-63e6f.firebaseapp.com",
  projectId: "receipeapp-63e6f",
  storageBucket: "receipeapp-63e6f.firebasestorage.app",
  messagingSenderId: "280242158168",
  appId: "1:280242158168:web:bbd792bd2b06438de6282d",
  measurementId: "G-18DB7JVS85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);