// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAE9XIvKOVpe5OtkqEpdR7D_VIwvQ2DrUQ",
    authDomain: "full-stack-project-7fada.firebaseapp.com",
    projectId: "full-stack-project-7fada",
    storageBucket: "full-stack-project-7fada.appspot.com",
    messagingSenderId: "28847487641",
    appId: "1:28847487641:web:0dc2fb763c20f6f157d608"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;