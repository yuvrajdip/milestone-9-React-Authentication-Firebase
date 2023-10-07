// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCK9fXFbLceaUnWcA9re0TpeveL-3gghEk",
  authDomain: "module-51-auth-737c0.firebaseapp.com",
  projectId: "module-51-auth-737c0",
  storageBucket: "module-51-auth-737c0.appspot.com",
  messagingSenderId: "3442034347",
  appId: "1:3442034347:web:a495cc15e7d5257b8b59ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);
export default auth;

//* firebase basic setup done 