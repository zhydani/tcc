// Import the functions you need from the SDKs you need
import firebase from "firebase";
import "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5W3Mkclbr_385kwjk2E-6xz2ZESYqiOY",
  authDomain: "ciclo-seguro-tcc.firebaseapp.com",
  projectId: "ciclo-seguro-tcc",
  storageBucket: "ciclo-seguro-tcc.appspot.com",
  messagingSenderId: "770925622465",
  appId: "1:770925622465:web:b4fe735b1fc2649ada9040",
  measurementId: "G-R1R8V6KVTC"
};

const database = firebase.firestore();
export default database;