import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

//connect firebase with other components
//we take from here if something we need on other

const firebaseConfig = {
  apiKey: "AIzaSyAY7mnqD96a58_F7MA-m321CQ-L9RODzlw",
  authDomain: "vue-chat-92f79.firebaseapp.com",
  projectId: "vue-chat-92f79",
  storageBucket: "vue-chat-92f79.appspot.com",
  messagingSenderId: "350865935011",
  appId: "1:350865935011:web:4fed1d7f0862d3a05e8d16",
};
console.log("firebase composabler", firebaseConfig);

//init firebase
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp, projectAuth, projectStorage };
