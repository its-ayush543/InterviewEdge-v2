// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyB8sp73EJLd2INPYSEm19hWURfeg4qndFc",
  authDomain: "interviewedge-eb920.firebaseapp.com",
  projectId: "interviewedge-eb920",
  storageBucket: "interviewedge-eb920.firebasestorage.app",
  messagingSenderId: "256849138353",
  appId: "1:256849138353:web:3b7939fb2d99b278890890",
  measurementId: "G-XW6LBBZ4N3"
};

// Initialize Firebase
const app = !getApps.length ?   initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);