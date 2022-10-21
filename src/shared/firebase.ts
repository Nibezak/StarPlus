import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// const app = initializeApp({
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
// });

// const firebaseConfig = {
//   apiKey: "AIzaSyBiO4NTttc68zMHFkRFXyK5qLsU9zXsJmg",
//   authDomain: "moonlight-40ecf.firebaseapp.com",
//   projectId: "moonlight-40ecf",
//   storageBucket: "moonlight-40ecf.appspot.com",
//   messagingSenderId: "1043878072437",
//   appId: "1:1043878072437:web:0fd78f6e64f3cfbe2d283c",
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyAgEm7ACQi31-CXgN9fvmyv81hVuKh2aSc",
//   authDomain: "star-c4195.firebaseapp.com",
//   projectId: "star-c4195",
//   storageBucket: "star-c4195.appspot.com",
//   messagingSenderId: "972813613085",
//   appId: "1:972813613085:web:6ab66fe9f30fa9add4aef4",
//   measurementId: "G-0EFFDYCBWT"
// };

const firebaseConfig = {
  apiKey: "AIzaSyA5cG_NkqBBydR1yNYMbgWTESqgreXBxag",
  authDomain: "starplus-6c8d7.firebaseapp.com",
  databaseURL: "https://starplus-6c8d7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "starplus-6c8d7",
  storageBucket: "starplus-6c8d7.appspot.com",
  messagingSenderId: "532084636660",
  appId: "1:532084636660:web:25eec83836b08f1f42d7a1"
};
// const firebaseConfig = {
//   apiKey: "AIzaSyC5V0Pm-YJV9h0kyX9aBgrKrs3_J3R2Foo",
//   authDomain: "pvt-comments.firebaseapp.com",
//   databaseURL: "https://pvt-comments-default-rtdb.firebaseio.com",
//   projectId: "pvt-comments",
//   storageBucket: "pvt-comments.appspot.com",
//   messagingSenderId: "700353567702",
//   appId: "1:700353567702:web:f36bbbae9c78ac1e3ea277",
// };
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
// export const db = initializeFirestore(app, {
//   experimentalForceLongPolling: true,
// });

export const auth = getAuth(app);