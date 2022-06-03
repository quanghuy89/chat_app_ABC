import firebase from "firebase/app";

import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
	apiKey: "AIzaSyD-3w90nWja488dX7oiBVd4yQNm-PZ2R8I",
	authDomain: "group04-chat-app-407a4.firebaseapp.com",
	projectId: "group04-chat-app-407a4",
	storageBucket: "group04-chat-app-407a4.appspot.com",
	messagingSenderId: "792168196249",
	appId: "1:792168196249:web:2021f830988f204ec33008",
	measurementId: "G-JYGZTDC8X3",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

if (window.location.hostname === "localhost") {
	auth.useEmulator("http://localhost:9099");
	db.useEmulator("localhost", "8080");
}

export { db, auth };
export default firebase;
