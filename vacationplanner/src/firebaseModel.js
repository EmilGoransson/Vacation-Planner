import firebaseConfig from "/src/firebaseConfig.js";
import firebase from "firebase/app";
// Initialise firebase
firebase.initializeApp(firebaseConfig);
const REF = "vacationPlanner";
firebase
  .database()
  .ref(REF + "/test")
  .set("dummy");
