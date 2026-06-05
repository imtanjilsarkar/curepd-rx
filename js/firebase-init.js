import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, sendPasswordResetEmail, sendEmailVerification } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAupee5VRVJIGhvW95HnDSumB-f_k7kWzU",
  authDomain: "curepad-rx.firebaseapp.com",
  projectId: "curepad-rx",
  storageBucket: "curepad-rx.firebasestorage.app",
  messagingSenderId: "986173283901",
  appId: "1:986173283901:web:1cd6c97c0d3908a5825454"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export { sendPasswordResetEmail, sendEmailVerification };