import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Button from "react-bootstrap/Button";
import { Navigate, useNavigate } from "react-router";
import { singInWithGoogle, singInWithFacebook } from "../firebase";
import GoogleButton from 'react-google-button'
/*
@Author Mahdi <mnazari@kth.se>
TODO:
DONE:
*/

function SignInPageView() {
  const navigate = useNavigate();
  return (
    <div className="signInPage">
      <div className="signinBtns">
        <Button variant="primary" size="lm" onClick={() => navigate("/")}>
          Back to Home
        </Button>
      </div>
      <div className="signInOpts">
        <Button variant="primary" size="lm" onClick={singInWithFacebook}>
          Sign in with Feacebook!
        </Button>
      </div>
      <div className="signInOpts">
        <GoogleButton
          onClick={singInWithGoogle}
        />
      </div>
    </div>
  );
}
export default SignInPageView;
