// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwTqXX57EILdTn_7nzdgvZOYnpDVDt8sM",
  authDomain: "hspantryapp-73e10.firebaseapp.com",
  projectId: "hspantryapp-73e10",
  storageBucket: "hspantryapp-73e10.appspot.com",
  messagingSenderId: "637901237971",
  appId: "1:637901237971:web:beb1ab651b96b3cbeeae26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
export {
    app, firestore
}