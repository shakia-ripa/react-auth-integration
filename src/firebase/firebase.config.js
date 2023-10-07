// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4Re_Y-3s2XpwArQgIRYtyOAtmJPC15tg",
  authDomain: "react-auth-integration-37e30.firebaseapp.com",
  projectId: "react-auth-integration-37e30",
  storageBucket: "react-auth-integration-37e30.appspot.com",
  messagingSenderId: "837822390558",
  appId: "1:837822390558:web:a283e63439c5b03fe2690f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;