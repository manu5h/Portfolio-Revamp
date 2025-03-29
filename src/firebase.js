import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  increment,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGuAT90vpmeTvixPnz4yqjAVWVWvHWpB8",
  authDomain: "manush-portfolio.firebaseapp.com",
  projectId: "manush-portfolio",
  storageBucket: "manush-portfolio.appspot.com", // ✅ Corrected
  messagingSenderId: "62567634562",
  appId: "1:62567634562:web:1e7e9d337771392979469b",
  measurementId: "G-084PRHPWXK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };

// 🔹 Function to update visitor count
export const updateVisitorCount = async () => {
  const visitRef = doc(db, "analytics", "visits"); // ✅ Directly reference the document

  try {
    await setDoc(visitRef, { count: increment(1) }, { merge: true }); // ✅ Firestore correctly merges updates
  } catch (error) {
    console.error("Error updating visit count:", error);
  }
};

// 🔹 Function to track button clicks
export const trackButtonClick = async (buttonName) => {
  const buttonRef = doc(db, "analytics", buttonName);

  try {
    await setDoc(buttonRef, { clicks: increment(1) }, { merge: true });
  } catch (error) {
    console.error(`Error tracking click for ${buttonName}:`, error);
  }
};
