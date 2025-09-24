
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARp6wZK_34AkLkbMw4SgNMY-ejg-6AQqE",
  authDomain: "mrscleaning-3c4c5.firebaseapp.com",
  projectId: "mrscleaning-3c4c5",
  storageBucket: "mrscleaning-3c4c5.firebasestorage.app",
  messagingSenderId: "217966590013",
  appId: "1:217966590013:web:78ba8c313e5ad273eb1254"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)