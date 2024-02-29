// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABS2LHOjxKx5dj0d3walyD22Tz1Esb7Qc",
  authDomain: "tangles-1a530.firebaseapp.com",
  projectId: "tangles-1a530",
  storageBucket: "tangles-1a530.appspot.com",
  messagingSenderId: "472337114928",
  appId: "1:472337114928:web:ecd0c4028a7a705b528af5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseApp = getApp();
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(firebaseApp, "gs://tangles-1a530.appspot.com");
const provider = new GoogleAuthProvider(app);

export { app, db, auth, storage, provider };

// androidclientId =
// 472337114928-kocfqi40jpjg5uuopppmr52l6995la0t.apps.googleusercontent.com
// iodCLientId =
// 472337114928-d03gkv1d8t9d952a93l6fl8hctu266qh.apps.googleusercontent.com
// web =
//   "472337114928-bogip415unt32goka6stdlqn4md7ub4g.apps.googleusercontent.com";
