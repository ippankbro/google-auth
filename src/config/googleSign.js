import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD88szoyjbY3yTA1fwLqCXbdeBqtwDJS0s",
  authDomain: "auth-project-433f1.firebaseapp.com",
  projectId: "auth-project-433f1",
  storageBucket: "auth-project-433f1.appspot.com",
  messagingSenderId: "1084519315185",
  appId: "1:1084519315185:web:837ee6926fe94f62541b50",
  measurementId: "G-5Q0BKJJJTQ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };
