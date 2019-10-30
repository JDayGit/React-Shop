import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
     apiKey: "AIzaSyD18UHh-1U5fynJAKOgb6zKn8UHXKd-PxQ",
     authDomain: "react-shop-cd97f.firebaseapp.com",
     databaseURL: "https://react-shop-cd97f.firebaseio.com",
     projectId: "react-shop-cd97f",
     storageBucket: "react-shop-cd97f.appspot.com",
     messagingSenderId: "857253396585",
     appId: "1:857253396585:web:d2981fc373fcb7bd9022f8",
     measurementId: "G-3JHKZFXXQ7"
   };

   firebase.initializeApp(config);

   export const auth = firebase.auth();
   export const firestore = firebase.firestore();

   const provider = new firebase.auth.GoogleAuthProvider();
   provider.setCustomParameters({ prompt: 'select_account' });
   export const signInWithGoogle = () => auth.signInWithPopup(provider);

   export default firebase;