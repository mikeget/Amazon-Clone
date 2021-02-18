import firebase from "firebase";



const firebaseConfig = {
  apiKey: "AIzaSyC1RdfwDNPlrTiglYh_r3omXdHLKDXtbyA",
  authDomain: "michael--clone.firebaseapp.com",
  projectId: "michael--clone",
  storageBucket: "michael--clone.appspot.com",
  messagingSenderId: "424675375839",
  appId: "1:424675375839:web:e73719e52d441ba3ce476a",
  measurementId: "G-3ZZKNW6PDK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };