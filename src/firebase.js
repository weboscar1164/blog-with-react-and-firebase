// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDWtI82lDGD9wV47dwv2IHZsWfchUratnU",
	authDomain: "blog-with-react-47800.firebaseapp.com",
	projectId: "blog-with-react-47800",
	storageBucket: "blog-with-react-47800.appspot.com",
	messagingSenderId: "313986478187",
	appId: "1:313986478187:web:ffc9b5eaf093e407d8012e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
