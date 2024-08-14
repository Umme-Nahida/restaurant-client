// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDM-i1OX7i8TRBUye34GMMPCrSAbq4D7Hw",
  authDomain: "bristo-boss-fc8a6.firebaseapp.com",
  projectId: "bristo-boss-fc8a6",
  storageBucket: "bristo-boss-fc8a6.appspot.com",
  messagingSenderId: "230140481880",
  appId: "1:230140481880:web:78acbc6ff1d3649780952d"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app)