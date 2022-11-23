import React from "react";
import "./style.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlgswIKO5PA2ANCt6rJwLRuJd2D063kN0",
  authDomain: "contact-form-25aeb.firebaseapp.com",
  projectId: "contact-form-25aeb",
  storageBucket: "contact-form-25aeb.appspot.com",
  messagingSenderId: "703298334910",
  appId: "1:703298334910:web:c835d46550476b1758aeef",
  measurementId: "G-ELW49358JF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
    </div>
  );
}
