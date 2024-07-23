// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANDL01VF2qzDN0dG9EiJsUiusBDXI2-48",
  authDomain: "instagram-page-26a06.firebaseapp.com",
  projectId: "instagram-page-26a06",
  storageBucket: "instagram-page-26a06.appspot.com",
  messagingSenderId: "238225006725",
  appId: "1:238225006725:web:b9372f2239d8530b3489ec",
  measurementId: "G-5PVR00VKMV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();