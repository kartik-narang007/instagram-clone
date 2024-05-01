// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJyZYRuFcmqlt1r5nJMiCznOy9Q9MvHZ0",
  authDomain: "instagram-clone-44683.firebaseapp.com",
  projectId: "instagram-clone-44683",
  storageBucket: "instagram-clone-44683.appspot.com",
  messagingSenderId: "944848137180",
  appId: "1:944848137180:web:b12e27dba95741612d3d19",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { db, app, storage };
