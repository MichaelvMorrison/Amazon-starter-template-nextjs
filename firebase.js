import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDTr5XMabg6qok5ii6ExkM3mwX7C9CJZbM",
  authDomain: "fir-c4ae3.firebaseapp.com",
  projectId: "fir-c4ae3",
  storageBucket: "fir-c4ae3.appspot.com",
  messagingSenderId: "28414734698",
  appId: "1:28414734698:web:d4b371261e6b8c52c57513",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
