import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDqZK2KPD3OO0BfijOTkFBwdvtXDfUYTP4",
    authDomain: "pruebachinchin-eabc9.firebaseapp.com",
    projectId: "pruebachinchin-eabc9",
    storageBucket: "pruebachinchin-eabc9.appspot.com",
    messagingSenderId: "1032207432513",
    appId: "1:1032207432513:web:eab38f54888c8d7c0cbfc0",
    measurementId: "G-DJK9657Z73"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app); 
export const store = getStorage(app); 

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: "select_account" });