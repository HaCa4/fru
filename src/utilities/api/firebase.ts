// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCY-Ww97rLky1yc_uF0DLUVF8DQH25ZqIY",
  authDomain: "movie-port-71aea.firebaseapp.com",
  projectId: "movie-port-71aea",
  storageBucket: "movie-port-71aea.appspot.com",
  messagingSenderId: "806219023032",
  appId: "1:806219023032:web:7e19038bd001b5354baa4d",
  measurementId: "G-ZSGJ06E7WJ",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
