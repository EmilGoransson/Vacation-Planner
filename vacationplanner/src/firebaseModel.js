
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider } from "firebase/auth";
import { firebaseConfig } from "./firebase";
import { getDatabase, ref, set } from "firebase/database";
import { attractionStore } from "./model/vacationStore";



// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase();

set(ref(database, 'user/'), { username: 'dummyyyy' });



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
const user = auth.currentUser;


if (user !== null) {
    // User is signed in, see docs for a list of available properties

} else {
    // No user is signed in.

}



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
