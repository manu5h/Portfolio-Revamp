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
  storageBucket: "manush-portfolio.appspot.com", // ✅ Fixed storage bucket typo
  messagingSenderId: "62567634562",
  appId: "1:62567634562:web:1e7e9d337771392979469b",
  measurementId: "G-084PRHPWXK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };

// ✅ Function to update total (normal) visits
export const updateVisitorCount = async () => {
  const visitRef = doc(db, "analytics", "visits"); // ✅ Correct Firestore reference

  try {
    await setDoc(visitRef, { count: increment(1) }, { merge: true }); // ✅ Merge updates
  } catch (error) {
    console.error("Error updating visit count:", error);
  }
};

// ✅ Function to update unique visits (only once per session)
export const updateUniqueVisitorCount = async () => {
  const visitRef = doc(db, "analytics", "unique_visits"); // ✅ Fixed reference

  // Check if the user has already been counted as a unique visitor
  if (localStorage.getItem("unique_visited")) {
    return; // Exit without increasing count again
  }

  try {
    const visitDoc = await getDoc(visitRef);
    if (visitDoc.exists()) {
      await setDoc(visitRef, { count: increment(1) }, { merge: true });
    } else {
      await setDoc(visitRef, { count: 1 });
    }

    // Store a flag in local storage so the same user isn't counted again
    localStorage.setItem("unique_visited", "true");
  } catch (error) {
    console.error("Error updating unique visit count:", error);
  }
};

// ✅ Function to track button clicks
export const trackButtonClick = async (buttonName) => {
  const buttonRef = doc(db, "analytics", buttonName);

  try {
    await setDoc(buttonRef, { clicks: increment(1) }, { merge: true });
  } catch (error) {
    console.error(`Error tracking click for ${buttonName}:`, error);
  }
};
