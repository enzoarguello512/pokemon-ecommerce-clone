// import firebase from 'firebase';
import firebase from 'firebase/app';

import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_PROJECTID,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID
});

// Initialize Firebase
//firebase.initializeApp(firebaseConfig);
//firebase.analytics();

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}
export function getFirestoreDate() {
  return firebase.firestore.Timestamp.fromDate(new Date());
}
export function convertTimestamp(firebaseDate) {
  return firebaseDate.toDate();
}
