import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBmctrHK_Qls2NbBJTUzHZKaozk1tGgn18",
  authDomain: "image-grid-acb7b.firebaseapp.com",
  projectId: "image-grid-acb7b",
  storageBucket: "image-grid-acb7b.appspot.com",
  messagingSenderId: "191242464886",
  appId: "1:191242464886:web:80ef9a10b1685232f5f957",
  measurementId: "G-BHYW5F33QB"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };