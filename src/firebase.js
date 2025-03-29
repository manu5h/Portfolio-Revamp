import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDoc,
  setDoc,
  doc,
  increment,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGuAT90vpmeTvixPnz4yqjAVWVWvHWpB8",
  authDomain: "manush-portfolio.firebaseapp.com",
  projectId: "manush-portfolio",
  storageBucket: "manush-portfolio.firebasestorage.app",
  messagingSenderId: "62567634562",
  appId: "1:62567634562:web:1e7e9d337771392979469b",
  measurementId: "G-084PRHPWXK",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

export const updateVisitorCount = async () => {
  const visitRef = doc(collection(db, "analytics"), "visits");

  try {
    const visitDoc = await getDoc(visitRef);
    if (visitDoc.exists()) {
      await setDoc(visitRef, { count: increment(1) }, { merge: true });
    } else {
      await setDoc(visitRef, { count: 1 });
    }
  } catch (error) {
    console.error("Error updating visit count:", error);
  }
};

export const trackButtonClick = async (buttonName) => {
  const buttonRef = doc(db, "analytics", buttonName);

  try {
    const buttonDoc = await getDoc(buttonRef);
    if (buttonDoc.exists()) {
      await setDoc(buttonRef, { clicks: increment(1) }, { merge: true });
    } else {
      await setDoc(buttonRef, { clicks: 1 });
    }
  } catch (error) {
    console.error("Error tracking button click:", error);
  }
};
