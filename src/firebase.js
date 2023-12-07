// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-4a229.firebaseapp.com",
  projectId: "real-estate-4a229",
  storageBucket: "real-estate-4a229.appspot.com",
  messagingSenderId: "755489725528",
  appId: "1:755489725528:web:46199d5b29ba1794d07e2d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
