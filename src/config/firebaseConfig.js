
// import firebase from 'firebase/app';
// import 'firebase/firestore';

// const firebaseConfig = {
//     apiKey: "AIzaSyBkBNIG4ltNq4YaCxTbpcAotPIVxgB6gE8",
//     authDomain: "gemhandsglobal.firebaseapp.com",
//     projectId: "gemhandsglobal",
//     storageBucket: "gemhandsglobal.appspot.com",
//     messagingSenderId: "339649639834",
//     appId: "1:339649639834:web:fb987498dcfc78ee3e7623",
//     measurementId: "G-ZG3GQDDGQZ"
// };

// firebase.initializeApp(firebaseConfig);
// const firestore = firebase.firestore();

// export { firestore };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAqLeOsX54s9IwxCqJfpd83fGmNb0ktogY",
    authDomain: "gemhandsglobal-bcac0.firebaseapp.com",
    projectId: "gemhandsglobal-bcac0",
    storageBucket: "gemhandsglobal-bcac0.appspot.com",
    messagingSenderId: "504486011327",
    appId: "1:504486011327:web:f517de86dc5468c473010a",
    databaseURL: "https://gemhandsglobal-bcac0-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);






