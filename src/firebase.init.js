// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDlbXGEPG0Ju5v9IqJi2MNdRqRFtakrQyQ",
    authDomain: "red-onion-abd10.firebaseapp.com",
    projectId: "red-onion-abd10",
    storageBucket: "red-onion-abd10.appspot.com",
    messagingSenderId: "861821111048",
    appId: "1:861821111048:web:e9cfefc2a57b8bd3523abd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;