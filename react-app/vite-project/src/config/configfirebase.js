import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA4Hll194oJstCBTPpwpabnfRkojXijE8o",
  authDomain: "react-js-60995.firebaseapp.com",
  projectId: "react-js-60995",
  storageBucket: "react-js-60995.appspot.com",
  messagingSenderId: "244228823725",
  appId: "1:244228823725:web:935b52bea465741edd0424"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//exportamos nuestra base de datos a toda la app
export const db = getFirestore(app);

export { firebaseConfig };