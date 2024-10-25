import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA839AwGFFalu_mx9P4qk1pxOZnccJWGEM",
  authDomain: "clone-cab8a.firebaseapp.com",
  projectId: "clone-cab8a",
  storageBucket: "clone-cab8a.appspot.com",
  messagingSenderId: "64329739702",
  appId: "1:64329739702:web:a41a1c8963bdfde0992517",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth()

export { db, auth };