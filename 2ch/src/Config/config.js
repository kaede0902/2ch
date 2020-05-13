import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyDmalZJoWLjvCGpUAAGc1E384X0QTfdLJk",
  authDomain: "kaede-0902ch.firebaseapp.com",
  databaseURL: "https://kaede-0902ch.firebaseio.com",
  projectId: "kaede-0902ch",
  storageBucket: "kaede-0902ch.appspot.com",
  messagingSenderId: "351430009448",
  appId: "1:351430009448:web:202e09657e76268ef391dd",
  measurementId: "G-4Z0L2R5D96"
};

export const firestore = firebase.initializeApp(config); 
