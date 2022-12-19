import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Button from "react-bootstrap/Button";
import { Navigate, useNavigate } from "react-router";
import GoogleButton from "react-google-button";
import { singInWithGoogle, singInWithFacebook } from "../firebaseModel";
import useAttractionStore from "../model/vacationStore";
/*
@Author Mahdi <mnazari@kth.se>
TODO:
DONE:
*/

function SignInPageView() {
  const navigate = useNavigate();
  const setUserEmail = useAttractionStore((state) => state.setUserEmail);
  const singIN = () => {
    singInWithGoogle().then((result) => {
      setUserEmail(result.user.email);
      navigate("/");
    });
  };
  return (
    <div className="signingViewParent">
      <img src={"https://i.imgur.com/CJBGl6T.png"} width={75} height={75} />
      <div className="signingBtns">
        <Button variant="primary" size="sm" onClick={() => navigate("/")}>
          Back to Home
        </Button>
      </div>
      <h3
        style={{
          fontSize: "2.2rem",
          marginBottom: "2rem",
        }}
      >
        Vacation Planner
      </h3>
      <div className="signInOpts">
        <GoogleButton onClick={singIN} />
        <h1>{localStorage.getItem("name")}</h1>
        <h1>{localStorage.getItem("email")}</h1>
      </div>
    </div>
  );
}
export default SignInPageView;
