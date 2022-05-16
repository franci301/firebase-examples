import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBge0GKUkqNEBPRWVyEIBRUPsDIkkk_Ofc",
    authDomain: "fir-tutorial-d7d79.firebaseapp.com",
    projectId: "fir-tutorial-d7d79",
    storageBucket: "fir-tutorial-d7d79.appspot.com",
    messagingSenderId: "1020093848737",
    appId: "1:1020093848737:web:f3312c948480bf765fa4e0",
    measurementId: "G-Q1Y2EZ9JGW"
  };

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)