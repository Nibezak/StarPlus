import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyA5cG_NkqBBydR1yNYMbgWTESqgreXBxag",
  authDomain: "starplus-6c8d7.firebaseapp.com",
  databaseURL: "https://starplus-6c8d7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "starplus-6c8d7",
  storageBucket: "starplus-6c8d7.appspot.com",
  messagingSenderId: "532084636660",
  appId: "1:532084636660:web:25eec83836b08f1f42d7a1"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
// export const db = initializeFirestore(app, {
//   experimentalForceLongPolling: true,
// });
export const auth = getAuth(app);
