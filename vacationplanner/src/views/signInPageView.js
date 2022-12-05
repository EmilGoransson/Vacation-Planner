import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Button from "react-bootstrap/Button";

function SignInPageView() {
  return (
    <div className="signInPage">
      <div className="signingBtns">
        <Button variant="primary" size="sm" onClick={console.log("Click!")}>
          Back to home page!
        </Button>
      </div>
      <div className="signInOpts">
        <Button variant="primary" size="lm" onClick={console.log("Click!")}>
          Sign in with google!
        </Button>
      </div>
      <div className="signInOpts">
        <Button variant="primary" size="lm" onClick={console.log("Click!")}>
          Sign in with github!
        </Button>
      </div>
    </div>
  );
}
export default SignInPageView;
