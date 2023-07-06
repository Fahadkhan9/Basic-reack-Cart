import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgUFaULX2NdDay82eUHznejuzkvevyMDo",
  authDomain: "cart-77ccb.firebaseapp.com",
  projectId: "cart-77ccb",
  storageBucket: "cart-77ccb.appspot.com",
  messagingSenderId: "901527034778",
  appId: "1:901527034778:web:9d73dc0f568f2be499f823"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// serviceWorker.unregister();