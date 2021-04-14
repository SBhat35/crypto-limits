import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';


var firebaseConfig = {
  apiKey: "AIzaSyD-ql17m6WApG-nscVTPzsTEGN3d5otQmo",
  authDomain: "next-blog-83865.firebaseapp.com",
  projectId: "next-blog-83865",
  storageBucket: "next-blog-83865.appspot.com",
  messagingSenderId: "958897513686",
  appId: "1:958897513686:web:1c69df276d7c1703751577",
  measurementId: "G-X680YDD93C"
};

if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

export const auth  = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();