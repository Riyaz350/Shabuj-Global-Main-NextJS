// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSZ4LvhjF89N-RUxD0xH0RtsAOB9VUdrM",
  authDomain: "sge-main-68658.firebaseapp.com",
  projectId: "sge-main-68658",
  storageBucket: "sge-main-68658.appspot.com",
  messagingSenderId: "723329151401",
  appId: "1:723329151401:web:cf7798e931e5561a8014b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;