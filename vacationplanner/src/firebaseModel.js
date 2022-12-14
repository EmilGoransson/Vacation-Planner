import firebase from "./firebase";
import { getDatabase, ref, set } from "firebase/database";
import { initializeApp } from "firebase/app";

// Initialise firebase
initializeApp(firebase);
const REF = "vacationPlanner";
const database = getDatabase();
set(ref(database, "AddToFavorite/"), {
  usename: "Vasa Museet",
});

// import { getDatabase, ref, set } from "firebase/database";

// function writeUserData(userId, name, email, imageUrl) {
//   const db = getDatabase();
//   set(ref(db, 'users/' + userId), {
//     username: name,
//     email: email,
//     profile_picture : imageUrl
//   });

export { database };
