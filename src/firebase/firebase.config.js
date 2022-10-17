// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBPdMkkZmSPEiZowSIZrjPDylSmrvZ3D50",
    authDomain: "ema-john--simple-with-auth.firebaseapp.com",
    projectId: "ema-john--simple-with-auth",
    storageBucket: "ema-john--simple-with-auth.appspot.com",
    messagingSenderId: "22419577816",
    appId: "1:22419577816:web:b92b9cd706162d8d52b0ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;