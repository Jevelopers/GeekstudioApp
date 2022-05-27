// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsUAeMQr7ABtW1bAmCz0JD3AxVoMlLfuc",
  authDomain: "geekstudiodemo.firebaseapp.com",
  databaseURL: "https://geekstudiodemo-default-rtdb.firebaseio.com",
  projectId: "geekstudiodemo",
  storageBucket: "geekstudiodemo.appspot.com",
  messagingSenderId: "434072662502",
  appId: "1:434072662502:web:b1888c11b40ab45d82a627"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);