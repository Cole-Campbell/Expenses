import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "@firebase/auth";

// CONVERT TO .env variables
const firebaseConfig = {
  apiKey: "AIzaSyA5CV56uw4y1OaN3PfZ0mv3yOyhgJyXBJM",
  authDomain: "cw-expenses.firebaseapp.com",
  projectId: "cw-expenses",
  storageBucket: "cw-expenses.appspot.com",
  messagingSenderId: "989076775990",
  appId: "1:989076775990:web:6afc854c77186fcbcda497",
  measurementId: "G-E6YCZ11JR9",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
export const auth = getAuth(app);

// LOGIN FUNC
export const credentialLogin = (email: string, password: string) => {};
