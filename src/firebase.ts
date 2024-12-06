// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";
import {
  getAuth,
  GoogleAuthProvider,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0CgRJYLfjRykVI7GM6_Ba3kK8qRnegVE",
  authDomain: "myapp-6700c.firebaseapp.com",
  projectId: "myapp-6700c",
  storageBucket: "myapp-6700c.firebasestorage.app",
  messagingSenderId: "1041532505508",
  appId: "1:1041532505508:web:99cc9addff16d777730531",
  measurementId: "G-0NGFQCKJ57",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const database = getDatabase(app);

setPersistence(auth, browserLocalPersistence).catch((error) => {
  console.error("Error setting persistence:", error);
});
