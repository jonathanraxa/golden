// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBq_MoMB84qhalN80zK5KzlaU6GshzxlZw",
  authDomain: "golden-98e49.firebaseapp.com",
  projectId: "golden-98e49",
  storageBucket: "golden-98e49.firebasestorage.app",
  messagingSenderId: "516226859946",
  appId: "1:516226859946:web:45f2be8aade6739bdfe1d3",
  measurementId: "G-VE3XS7LXS0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
// const analytics = getAnalytics(app);

export { app, auth, firestore, storage}