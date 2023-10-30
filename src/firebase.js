// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBC970aV9TTVJH5-AlIXXInErTiDAitepI",
  authDomain: "jobi-app-46aa7.firebaseapp.com",
  databaseURL:
    "https://jobi-app-46aa7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "jobi-app-46aa7",
  storageBucket: "jobi-app-46aa7.appspot.com",
  messagingSenderId: "612588982938",
  appId: "1:612588982938:web:199b635860489ced21c523",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;
