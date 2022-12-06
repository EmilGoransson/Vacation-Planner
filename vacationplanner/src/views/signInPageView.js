import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Button from "react-bootstrap/Button";

function SignInPageView() {
  return (
    <div className="signInPage">
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
