// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD8PtsIVLBPBAmT6huIhgv77S5U9Lnz8Mc",
    authDomain: "vgolf-5bded.firebaseapp.com",
    projectId: "vgolf-5bded",
    storageBucket: "vgolf-5bded.appspot.com",
    messagingSenderId: "475771404061",
    appId: "1:475771404061:web:de4f78e306ae97e1fdabf4",
    measurementId: "G-77L7H07TPF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
