// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBCRa0NtoTdtUL5CvL2CaJvhLDvBrR5zmA",
  authDomain: "migracion-a-angular-fa683.firebaseapp.com",
  projectId: "migracion-a-angular-fa683",
  storageBucket: "migracion-a-angular-fa683.firebasestorage.app",
  messagingSenderId: "549715878287",
  appId: "1:549715878287:web:b353eac4a3dff0bba6abfa",
  measurementId: "G-MFD6QH6EG1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);