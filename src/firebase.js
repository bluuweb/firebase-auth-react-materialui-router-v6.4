import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCIPYGBWJr4mG6H8-mFHKIhOSBkhzLHpfA",
    authDomain: "react-mui-144a1.firebaseapp.com",
    projectId: "react-mui-144a1",
    storageBucket: "react-mui-144a1.appspot.com",
    messagingSenderId: "1099324031237",
    appId: "1:1099324031237:web:7131a3cb81dbe41232376c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
