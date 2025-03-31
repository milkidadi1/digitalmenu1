// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0D5p-5xecBiaT7dDPuzTK02FV214Ss2U",
  authDomain: "digital-menu1-94206.firebaseapp.com",
  databaseURL: "https://digital-menu1-94206-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "digital-menu1-94206",
  storageBucket: "digital-menu1-94206.firebasestorage.app",
  messagingSenderId: "472756639444",
  appId: "1:472756639444:web:b274c6ae4a34ee043d4d41"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export Firebase services
export { db, collection, getDocs };