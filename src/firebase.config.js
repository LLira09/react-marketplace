// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/fireStore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.API_FB,
    authDomain: "house-marketplace-app-1bb4a.firebaseapp.com",
    projectId: "house-marketplace-app-1bb4a",
    storageBucket: "house-marketplace-app-1bb4a.appspot.com",
    messagingSenderId: "599802561997",
    appId: "1:599802561997:web:7e9a04f11b645436d8f084"
};

export const db = getFirestore()