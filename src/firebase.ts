import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCuy5Vy1glKWe9TRpYEWcIAbSuVAEtq__g",
  authDomain: "my-portfolio-50d7a.firebaseapp.com",
  projectId: "my-portfolio-50d7a",
  storageBucket: "my-portfolio-50d7a.appspot.com",
  messagingSenderId: "660601187320",
  appId: "1:660601187320:web:83901c263e15c7f638c40d",
  measurementId: "G-6RS99RCT6R",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
