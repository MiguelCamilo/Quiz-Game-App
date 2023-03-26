import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
	apiKey: "AIzaSyC6f7oSd2dT4QF-M9hAiUV6rjCCGZONfew",
	authDomain: "quiz-game-mc.firebaseapp.com",
	projectId: "quiz-game-mc",
	storageBucket: "quiz-game-mc.appspot.com",
	messagingSenderId: "89951361905",
	appId: "1:89951361905:web:7f1f5b7fbbc8964fe934d0",
	measurementId: "G-NDHWCJ9787",
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const storage = getStorage(app)