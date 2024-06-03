
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDMWWEFzu869mzSUrTd6UffGrlQTJ9nWCg",
  authDomain: "blogs-maturski.firebaseapp.com",
  projectId: "blogs-maturski",
  storageBucket: "blogs-maturski.appspot.com",
  messagingSenderId: "180512455858",
  appId: "1:180512455858:web:310a30fa2c2b57a93b9dab",
  measurementId: "G-YMGSF2HGZW"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()

export const db = getFirestore(app)