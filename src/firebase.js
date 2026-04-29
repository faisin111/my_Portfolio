import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5U3Y8el1GMLhMN_zYaU-jwKOQb-9SKTY",
  authDomain: "my-portfolio-3a844.firebaseapp.com",
  projectId: "my-portfolio-3a844",
  storageBucket: "my-portfolio-3a844.firebasestorage.app",
  messagingSenderId: "978636478681",
  appId: "1:978636478681:web:d26b09e9f5dc0910e206c8",
  measurementId: "G-TW1NVS79R2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
export const db = getFirestore(app);
