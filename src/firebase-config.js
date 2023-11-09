import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALHqBkokl0qjR2ESFlFgBucFZY9XQwscE",
  authDomain: "everything-pasta.firebaseapp.com",
  projectId: "everything-pasta",
  storageBucket: "everything-pasta.appspot.com",
  messagingSenderId: "128298229441",
  appId: "1:128298229441:web:f700992180a6a71c28fe40",
  measurementId: "G-BXJEBH079B"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export { auth };