// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "web-news-application.firebaseapp.com",
  projectId: "web-news-application",
  storageBucket: "web-news-application.firebasestorage.app",
  messagingSenderId: "224514145541",
  appId: "1:224514145541:web:63eaab9672eecfc8cf4b6c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);