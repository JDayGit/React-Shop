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

   // takes the userAuth object and stores in Firebase database.
   export const createUserProfileDocument = async (userAuth, additionalData) => {
     
    // if not signed in 
     if (!userAuth) return;
     
     // if signed in, get user info from Firebase database.
     const userRef = firestore.doc(`users/${userAuth.uid}`);
     
     // get the snapshot 
     const snapShot = await userRef.get();
     
     // if the snapshot doesn't exits, we want to create user using the data from userAuth object  
     if(!snapShot.exists) {
       const { displayName, email } = userAuth;
       // create timestamp of new userAuth creation
       const createdAt = new Date();

       try {
         // .set is the create method for Firestore
         await userRef.set({
           displayName, 
           email,
           createdAt, 
           ...additionalData
         })
       } catch (error) {
         console.log('error creating user', error.message);
       }
     }

     // although the above code creates the snapshot, we still may want the userRef for something.
     return userRef;

   }

   firebase.initializeApp(config);

   export const auth = firebase.auth();
   export const firestore = firebase.firestore();

   const provider = new firebase.auth.GoogleAuthProvider();
   provider.setCustomParameters({ prompt: 'select_account' });
   export const signInWithGoogle = () => auth.signInWithPopup(provider);

   export default firebase;