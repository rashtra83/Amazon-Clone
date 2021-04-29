// For Firebase JS SDK v7.20.0 and later, measurementId is optional\
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDg7_LMG0mDdE5PL0v1Qu8nSHBb7GDCaSc",
    authDomain: "app-clone-9a8d3.firebaseapp.com",
    projectId: "app-clone-9a8d3",
    storageBucket: "app-clone-9a8d3.appspot.com",
    messagingSenderId: "785247099946",
    appId: "1:785247099946:web:05c29464fb0a2d0876f753",
    measurementId: "G-MDL4NGTLSM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };