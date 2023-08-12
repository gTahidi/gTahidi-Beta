// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFvPy-FS-j37FswF5egcM7UMySKFKTnSA",
  authDomain: "gtahidi-4e575.firebaseapp.com",
  projectId: "gtahidi-4e575",
  storageBucket: "gtahidi-4e575.appspot.com",
  messagingSenderId: "664767662807",
  appId: "1:664767662807:web:5de7b49e782c8a70f73e92",
  measurementId: "G-DSLRFTJ5JB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
