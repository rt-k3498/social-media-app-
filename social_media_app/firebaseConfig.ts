import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDC1RGJmMJhFyKr0T93WN_5BAiIjTe43tU",
  authDomain: "social-media-app-a97f0.firebaseapp.com",
  projectId: "social-media-app-a97f0",
  storageBucket: "social-media-app-a97f0.firebasestorage.app",
  messagingSenderId: "161524089285",
  appId: "1:161524089285:web:9bafc062e01d3934e90bac"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
