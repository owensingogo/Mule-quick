import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCj5nQowUtppIX_zP0Z2-soXDDqfko-7LQ",
  authDomain: "mule-quickfix.firebaseapp.com",
  projectId: "mule-quickfix",
  storageBucket: "mule-quickfix.firebasestorage.app",
  messagingSenderId: "279596335507",
  appId: "1:279596335507:web:150619a5a1212e507ae866"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getDatabase(app);

export { app, auth, db };