import React from "react";
import SignInPageView from "../views/signInPageView";
import useAttractionStore from "../model/vacationStore";
import { useNavigate } from "react-router";
import { singInWithGoogle } from "../firebaseModel";

/*
@Author Mahdi <mnazari@kth.se>
@Co-Author Emil <emilgo@kth.se>
TODO:
DONE:
*/

function SignInPage() {
  const navigate = useNavigate();
  const setUserEmail = useAttractionStore((state) => state.setUserEmail);

  const singIN = () => {
    singInWithGoogle().then((result) => {
      setUserEmail(result.user.email);
      navigate("/");
    });
  };

  return (
    <div>
      <SignInPageView
        userSignIn={singIN}
        navigateToHome={() => navigate("/")}
      />
    </div>
  );
}
export default SignInPage;
