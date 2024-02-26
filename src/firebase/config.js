// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbsjRsSuje0PHxROZyi-nMDHxncBKZve0",
  authDomain: "reactapp-126af.firebaseapp.com",
  projectId: "reactapp-126af",
  storageBucket: "reactapp-126af.appspot.com",
  messagingSenderId: "607032860202",
  appId: "1:607032860202:web:6eaf608ca073f03c10ad53",
  measurementId: "G-0ECVS37D9H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db}