// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCEUNZmw-xZ7Ilalnk3DdrVRUn2SzAJPos",
    authDomain: "hasib-vai-trc.firebaseapp.com",
    projectId: "hasib-vai-trc",
    storageBucket: "hasib-vai-trc.appspot.com",
    messagingSenderId: "406918355175",
    appId: "1:406918355175:web:5ee1c0d3d4b9dc76b26a42"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;