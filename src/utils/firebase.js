import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';

const config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PORJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
  };
  // Initialize Firebase
  
  firebase.initializeApp(config);

  export const { auth }  = firebase;
  export const database = firebase.database();
  export const storage = firebase.storage();
  export const provider = new firebase.auth.FacebookAuthProvider();