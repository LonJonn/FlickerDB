import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyCdW2HAuZSjCiaW_xgwVWrOVtobiAkn8FE",
	authDomain: "flickerdb.firebaseapp.com",
	databaseURL: "https://flickerdb.firebaseio.com",
	projectId: "flickerdb",
	storageBucket: "",
	messagingSenderId: "206491077505",
	appId: "1:206491077505:web:71840e492516f95f"
};

const fbApp = Firebase.initializeApp(firebaseConfig);

export const db = fbApp.firestore();
export const auth = fbApp.auth();
