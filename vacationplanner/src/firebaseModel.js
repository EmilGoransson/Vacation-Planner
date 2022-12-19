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

// testing set function
set(ref(database, "user/"), { username: "dummyyyy" });

export const auth = getAuth(app);

export const getCurrentUserID = () => {
  const user = auth.currentUser;

  if (user) {
    // get the user id
    const userID = user.uid;
    // const userID = user.providerId;
  } else {
  }
};

export const singInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      console.log(result);
      return result;
      // const profilPic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      //localStorage.setItem("profilPic", profilPic)
    })

    .catch((error) => {
      console.log(error);
    });
};

export const singInWithFacebook = () => {
  const provider = new FacebookAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
    })

    .catch((error) => {
      console.log(error);
    });
};

export { database };
