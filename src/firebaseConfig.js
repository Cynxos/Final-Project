import { initializeApp } from 'firebase/app';
import { getAuth, updateEmail, sendEmailVerification, reauthenticateWithCredential, EmailAuthProvider, updatePassword, signOut, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDHjjooA1-4XnQljWhtBeB-puFpgu1UrUU",
    authDomain: "fitness-health-tracker-a3688.firebaseapp.com",
    projectId: "fitness-health-tracker-a3688",
    storageBucket: "fitness-health-tracker-a3688.firebasestorage.app",
    messagingSenderId: "150390941512",
    appId: "1:150390941512:web:8b3ac5643b72ef8b19f57d",
    measurementId: "G-20PVYBGQJC"
  };


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, updateEmail, sendEmailVerification, reauthenticateWithCredential, EmailAuthProvider, updatePassword, signOut, provider };