import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'
var firebaseConfig = {
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    authDomain: "blog-2b433.firebaseapp.com",
    databaseURL: "https://blog-2b433.firebaseio.com",
    projectId: "blog-2b433",
    storageBucket: "blog-2b433.appspot.com",
    messagingSenderId: "634652672840",
    appId: process.env.REACT_APP_GOOGLE_APP_ID,
    measurementId: "G-XWP9F79SJL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default {firebase}