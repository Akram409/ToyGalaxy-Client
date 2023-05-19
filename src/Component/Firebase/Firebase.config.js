// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoqizEQrca8XtGRDkE6oTyZtgRlFrbQxI",
  authDomain: "toygalaxy-client.firebaseapp.com",
  projectId: "toygalaxy-client",
  storageBucket: "toygalaxy-client.appspot.com",
  messagingSenderId: "369932014444",
  appId: "1:369932014444:web:de3323c5fd4a988f1c5949"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app