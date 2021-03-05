import Firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// import seedDatadbase from '../seeds'

const firebaseConfig = {
  apiKey: "AIzaSyBft3TbG32VdhP-NZTfElLuYEr8yrO8tPg",
  authDomain: "instagram-clone-a9c12.firebaseapp.com",
  projectId: "instagram-clone-a9c12",
  storageBucket: "instagram-clone-a9c12.appspot.com",
  messagingSenderId: "287504266742",
  appId: "1:287504266742:web:a7f8557af9388c62eac3d7"
};

const firebase = Firebase.initializeApp(firebaseConfig);
const { FieldValue } = Firebase.firestore

// seedDatadbase(firebase);
console.log('firebase', firebase);

export { firebase, FieldValue };
