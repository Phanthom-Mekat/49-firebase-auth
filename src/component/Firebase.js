// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmxrh8jXwWV39G94aszpWJBIdd_pVlAmg",
  authDomain: "simple-firebase-47a6b.firebaseapp.com",
  projectId: "simple-firebase-47a6b",
  storageBucket: "simple-firebase-47a6b.firebasestorage.app",
  messagingSenderId: "403318483511",
  appId: "1:403318483511:web:f5d794e64d603987a02db2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;