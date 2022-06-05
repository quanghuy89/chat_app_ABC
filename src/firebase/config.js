import firebase from "firebase/app";

import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
	apiKey: "AIzaSyDJfTtDCI4XOGXaGLwxHxBaye4WcJI3Ywg",
	authDomain: "chat-app-13a97.firebaseapp.com",
	projectId: "chat-app-13a97",
	storageBucket: "chat-app-13a97.appspot.com",
	messagingSenderId: "1092770954741",
	appId: "1:1092770954741:web:21f035fb54b4e969ea74bc",
	measurementId: "G-WN6RD6FNZ8"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

auth.useEmulator("http://localhost:9099");
if (window.location.hostname === "localhost") {
	db.useEmulator("localhost", "8080");
}

export { db, auth };
export default firebase;
