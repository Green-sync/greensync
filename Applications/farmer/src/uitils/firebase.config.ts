import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";
const env = import.meta.env
const firebaseConfig = {
    apiKey: env.VITE_REACT_FIREBASE_API_KEY,
    authDomain: env.VITE_REACT_FIREBASE_AUTH_DOMAIN,
    projectId: env.VITE_REACT_FIREBASE_PROJECT_ID,
    storageBucket: env.VITE_REACT_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: env.VITE_REACT_FIREBASE_MESSEGING_SENDER_ID,
    appId: env.VITE_REACT_FIREBASE_APP_ID
}
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

 

