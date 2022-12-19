import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Button from "react-bootstrap/Button";
import GoogleButton from "react-google-button";

/*
@Author Mahdi <mnazari@kth.se>
TODO:
DONE:
*/

function SignInPageView(props) {
  function userSignInACB() {
    props.userSignIn();
  }

  return (
    <div className="signingViewParent">
      <img src={"https://i.imgur.com/CJBGl6T.png"} width={75} height={75} />
      <div className="signingBtns">
        <Button
          variant="primary"
          size="sm"
          onClick={() => props.navigateToHome()}
        >
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
        <GoogleButton onClick={userSignInACB} />
        <h1>{localStorage.getItem("name")}</h1>
        <h1>{localStorage.getItem("email")}</h1>
      </div>
    </div>
  );
}
export default SignInPageView;
