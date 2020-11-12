import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


var firebaseConfig = {
    apiKey: "AIzaSyCg1fkmiCGGOnvYOEbmW640vAgVLb5PoPk",
    authDomain: "olx-replica-1fbab.firebaseapp.com",
    databaseURL: "https://olx-replica-1fbab.firebaseio.com",
    projectId: "olx-replica-1fbab",
    storageBucket: "olx-replica-1fbab.appspot.com",
    messagingSenderId: "225629005397",
    appId: "1:225629005397:web:e03b5e805ddee2b3ee96dc",
    measurementId: "G-WBHNS0DFBZ"
  };
firebase.initializeApp(firebaseConfig);
  export default firebase