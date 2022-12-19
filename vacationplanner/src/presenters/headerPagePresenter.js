import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import HeaderPageView from "../views/HeaderPageView";
import useAttractionStore from "../model/vacationStore";
import { auth } from "../firebaseModel.js";
import { useNavigate } from "react-router";

/*
@Author Mahdi <mnazari@kth.se>
TODO:
DONE:
*/

function HeaderPage() {
  const anyUser = useAttractionStore((state) => state.userEmail);
  const navigate = useNavigate();
  function userSignOutACB() {
    auth.signOut();
    window.location.reload(true);
  }
  return (
    <HeaderPageView
      anyUser={anyUser}
      navigateToSignIn={() => navigate("/signin")}
      navigateToAbout={() => navigate("/about")}
      onSignOut={userSignOutACB}
      userName={anyUser}
    />
  );
}
export default HeaderPage;
