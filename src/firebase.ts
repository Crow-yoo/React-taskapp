// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZbAv84YkYYFNjFxmzJ9vYYEXq2ZXVPdQ",
  authDomain: "react-task-app-9aad2.firebaseapp.com",
  projectId: "react-task-app-9aad2",
  storageBucket: "react-task-app-9aad2.firebasestorage.app",
  messagingSenderId: "87721612990",
  appId: "1:87721612990:web:65beb2060b43839b6030ef",
  measurementId: "G-J068BEMVKM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);