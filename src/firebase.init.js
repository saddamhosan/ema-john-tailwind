// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3JZrUTSJs2mPQ-Q1av-DFkYj1OqAOLU4",
  authDomain: "ema-john-tailwind.firebaseapp.com",
  projectId: "ema-john-tailwind",
  storageBucket: "ema-john-tailwind.appspot.com",
  messagingSenderId: "237956280441",
  appId: "1:237956280441:web:ff3653d7a5f972d654e4a8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
export default auth