// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOyyXBbDcu1-esuRXZylH_W1k1kl1Wj8Q",
  authDomain: "tools-manufacturer-eaa83.firebaseapp.com",
  projectId: "tools-manufacturer-eaa83",
  storageBucket: "tools-manufacturer-eaa83.appspot.com",
  messagingSenderId: "14491122558",
  appId: "1:14491122558:web:bef9ee2869a1174869112f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth= getAuth(app);
export default auth