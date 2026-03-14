
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewer-7ed3a.firebaseapp.com",
  projectId: "interviewer-7ed3a",
  storageBucket: "interviewer-7ed3a.firebasestorage.app",
  messagingSenderId: "626377848056",
  appId: "1:626377848056:web:594faf8eb3260af5da770d"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}