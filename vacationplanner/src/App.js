import "./App.css";
import React, { useEffect } from "react";
import SignInPage from "./presenters/signInPagePresenter";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Routes, Route } from "react-router-dom";
import { Nav, Container } from "react-bootstrap";
import HomePage from "./pages/homePage";
import "./firebaseModel.js";
import AboutPageView from "./views/aboutParentPageView";
import AboutVacationPlannerView from "./views/aboutVacationPlannerView";
import ContactView from "./views/contactView";
import MakeVisitingPlanView from "./views/makeVisitingPlanView";
import { auth } from "./firebaseModel.js";
import useAttractionStore from "./model/vacationStore";
import { child, get, getDatabase, ref } from "firebase/database";

/*
@Author Mahdi <mnazari@kth.se>
@Co-Author Emil <emilgo@kth.se>
TODO:
DONE:
*/

function App() {
  const setUserEmail = useAttractionStore((state) => state.setUserEmail);
  const getUserId = useAttractionStore((state) => state.userEmail);
  const setFavoritesFirebase = useAttractionStore(
    (state) => state.fetchFromFireBase
  );
  const favorites = useAttractionStore((state) => state.favorite);

  function func() {
    console.log("Hej!");
    auth.onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        console.log(user);
        setUserEmail(user.email);

        getData();
        function getData() {
          let data;

          const id = getUserId.replaceAll(".", "");

          const dbRef = ref(getDatabase());
          get(child(dbRef, `users/` + id)).then((snapshot) => {
            if (snapshot.exists()) {
              data = snapshot.val();
              console.log(data);
              setFavoritesFirebase(data);
              console.log("Favorites after firebase", favorites);
            } else {
              console.log("No data available");
            }
          });
        }
      } else {
        // No user is signed in.
        console.log("No user inlogged!");
      }
    });
  }
  useEffect(func, []);

  return (
    <>
      <Nav bg="primary" variant="tabs">
        <Container>
          <Nav className="me-auto">
            <Link as={Link} to="/"></Link>
            <Link as={Link} to="/signin"></Link>
            <Link as={Link} to="/about"></Link>
          </Nav>
        </Container>
      </Nav>
      <div>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/about" element={<AboutPageView />}>
            <Route index element={<AboutVacationPlannerView />} />
            <Route path="/about/makePlan" element={<MakeVisitingPlanView />} />
            <Route path="/about/contact" element={<ContactView />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
