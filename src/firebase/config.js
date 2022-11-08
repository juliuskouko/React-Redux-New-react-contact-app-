// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfM2pCw_3fseL8VbAL6qXeqbYZPuUIy_E",
  authDomain: "contacts-30ae1.firebaseapp.com",
  projectId: "contacts-30ae1",
  storageBucket: "contacts-30ae1.appspot.com",
  messagingSenderId: "1045900202023",
  appId: "1:1045900202023:web:a66d0f363df84efaf5fe02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);