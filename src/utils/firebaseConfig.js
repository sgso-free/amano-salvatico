// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg-MTWiQZrlG1Ap8JS6DhOpXjqpDiKrh8",
  authDomain: "amano-c62c6.firebaseapp.com",
  projectId: "amano-c62c6",
  storageBucket: "amano-c62c6.appspot.com",
  messagingSenderId: "587465151145",
  appId: "1:587465151145:web:79152bb852c35c13e3cfb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;