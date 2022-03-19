// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "firebase/firebase-firestore";
import firebaseConfiguration from './firebaseConfiguration';

const firebaseApp = firebase.initializeApp(firebaseConfiguration);
const db = firebaseApp.firestore();

export default {
    logar: async () => {
        const provider = new firebase.auth
    }
}
