// Import the functions you need from the SDKs you need
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAAtBnfvvGycvdb-PJethv1LFiUV3t0Ysg",
    authDomain: "vacation-planner-3aa4f.firebaseapp.com",
    projectId: "vacation-planner-3aa4f",
    storageBucket: "vacation-planner-3aa4f.appspot.com",
    messagingSenderId: "972133800195",
    appId: "1:972133800195:web:79a82de79a3bbf23a87136"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const singInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => { console.log(result); })

        .catch((error) => { console.log(error); });
};
