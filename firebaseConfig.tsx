import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
import {getFirestore, collection, getDocs} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
export const firebaseConfig = {
    apiKey: "AIzaSyAeoNtSgo9GRaX5Raa92TKPzQWJdC37Ap8",
    authDomain: "boilerplate-7545b.firebaseapp.com",
//   databaseURL: 'https://project-id.firebaseio.com',
    projectId: "boilerplate-7545b",
    storageBucket: "boilerplate-7545b.appspot.com",
    messagingSenderId: "974143551034",
    appId: "1:974143551034:web:c4575fafbfef1ab4132703",
    measurementId: "G-CYEHQ2KJV1"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
