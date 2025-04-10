import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const provider = new firebase.auth.GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyA0r_sfQLOmvbHkCcmOjNzzUMVvWb9oO-k",
  authDomain: "chatnest-e0161.firebaseapp.com",
  projectId: "chatnest-e0161",
  storageBucket: "chatnest-e0161.firebasestorage.app",
  messagingSenderId: "182216579598",
  appId: "1:182216579598:web:4eefcd3360098af3affa5f",
  measurementId: "G-MGG8D31EM9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, provider, storage };
