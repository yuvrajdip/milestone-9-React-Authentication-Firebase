// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS-jmR1G1Ah6DOMnNBzB_XmwSIdssCy84",
  authDomain: "user-email-password-auth-78388.firebaseapp.com",
  projectId: "user-email-password-auth-78388",
  storageBucket: "user-email-password-auth-78388.appspot.com",
  messagingSenderId: "1056889868780",
  appId: "1:1056889868780:web:16549bf057224fa5dcb0c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;