// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpIuFGvwrmWTugTwIqzes7IGqifNBqpYk",
  authDomain: "taskmanager-f9f57.firebaseapp.com",
  projectId: "taskmanager-f9f57",
  storageBucket: "taskmanager-f9f57.appspot.com",
  messagingSenderId: "1019792127091",
  appId: "1:1019792127091:web:783c9ae40339c371d02606",
  measurementId: "G-34Y7NGDDPT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();