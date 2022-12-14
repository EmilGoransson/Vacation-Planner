// Import the functions you need from the SDKs you need
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider } from "firebase/auth";
import { firebaseConfig } from "./firebaseConfig";
import { getDatabase, ref, set } from "firebase/database";



// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase();

set(ref(database, 'user/'), { username: 'dummy' });



/*
export const addToFavoriteFirebase = () => {
    set (ref(database, 'favorite/'), {favorite: [favorite, ...state.favorite]})
 }*/


export function addCourseACB() {
    set(ref(database, "users/" + 1231), {
        code: "SF1626",
        name: "Flervariabel",
        hourSpent: 0,
    });
}


export const auth = getAuth(app);

export const singInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => { console.log(result); })

        .catch((error) => { console.log(error); });
};


export const singInWithFacebook = () => {

    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => { console.log(result); })

        .catch((error) => { console.log(error); });
};

export { database };