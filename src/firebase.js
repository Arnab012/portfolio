import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA0i1W07052Ec01PPaRIrcMdQuSXE-1irM",
  authDomain: "portfoloioarnab.firebaseapp.com",
  projectId: "portfoloioarnab",
  storageBucket: "portfoloioarnab.appspot.com",
  messagingSenderId: "377876282653",
  appId: "1:377876282653:web:047f028e8f16a66c9475f4"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
