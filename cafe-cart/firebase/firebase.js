// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB0aVirFdrP74U4pZ5b7-7F7x9r_zI6F-w",
    authDomain: "cafe-cart-dfc87.firebaseapp.com",
    projectId: "cafe-cart-dfc87",
    storageBucket: "cafe-cart-dfc87.firebasestorage.app",
    messagingSenderId: "98083776629",
    appId: "1:98083776629:web:99d847360d7d9d6b4a703c",
    measurementId: "G-877L06KM9N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
export default app;