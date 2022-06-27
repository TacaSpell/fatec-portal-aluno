// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore"
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCR8DrfNfERK-dxVRsYuBxfFVkAVRh3SAo",
  authDomain: "fatec-portal-aluno.firebaseapp.com",
  projectId: "fatec-portal-aluno",
  storageBucket: "fatec-portal-aluno.appspot.com",
  messagingSenderId: "456349757952",
  appId: "1:456349757952:web:559f666fa6e7407a841ee5",
  measurementId: "G-NPFENT0F1Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app);
// const analytics = getAnalytics(app);

export {
  auth,
  db
};