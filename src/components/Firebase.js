import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDrfTxwO96UNUT3lo7OSlCKnbwOxYJfMhA",
  authDomain: "ct-potfolio-v2.firebaseapp.com",
  projectId: "ct-potfolio-v2",
  storageBucket: "ct-potfolio-v2.appspot.com",
  messagingSenderId: "1001908128719",
  appId: "1:1001908128719:web:04458506fc4de37630e0ba",
});

const db = firebaseApp.firestore();

export { db };
