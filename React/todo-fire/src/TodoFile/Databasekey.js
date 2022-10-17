// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDxIaJCsDJ8L7xJOPa_URJZW5LXctuVT4",
  authDomain: "todo-firease.firebaseapp.com",
  projectId: "todo-firease",
  storageBucket: "todo-firease.appspot.com",
  messagingSenderId: "154650665898",
  appId: "1:154650665898:web:764507df0436aeb0fe41d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


export {db}