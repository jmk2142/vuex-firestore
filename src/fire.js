import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import store from "./store";

const firebaseConfig = {
  apiKey: "AIzaSyBSd1kXFtarKOb44tFuh589W9r0sxQizuA",
  authDomain: "su20-ff4c5.firebaseapp.com",
  databaseURL: "https://su20-ff4c5.firebaseio.com",
  projectId: "su20-ff4c5",
  storageBucket: "su20-ff4c5.appspot.com",
  messagingSenderId: "113898032348",
  appId: "1:113898032348:web:cb6ae176d6f9fae3963819",
  measurementId: "G-0QLFWDBNBM"
};

const db = firebase.initializeApp(firebaseConfig).firestore();

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch("signIn", user);
    // REDIRECT ROUTER to some page?
  } else {
    store.dispatch("signOut");
  }
});

export { firebase, db };
