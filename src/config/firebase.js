import firebase from "firebase/app";
import "firbase/firestore";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDZ2-Os1MoMLZszzyHI-nDCbOYfHdrz0Js",
  authDomain: "farmapp-dulph.firebaseapp.com",
  databaseURL: "https://farmapp-dulph.firebaseio.com",
  projectId: "farmapp-dulph",
  storageBucket: "farmapp-dulph.appspot.com",
  messagingSenderId: "433306739821",
  appId: "1:433306739821:web:87b3967894f008641e4b64",
  measurementId: "G-Z0BK8LZSNK",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
