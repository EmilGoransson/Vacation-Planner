import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Button from "react-bootstrap/Button";

/*
@Author Mahdi <mnazari@kth.se>
@Co-Author Emil <emilgo@kth.se>
TODO:
DONE:
*/

function HeaderPageView(props) {
  function signOutACB() {
    props.onSignOut();
  }
  function signInACB() {
    props.navigateToSignIn();
  }

  function aboutButtonACB() {
    props.navigateToAbout();
  }
  return (
    <div>
      <div className="signingViewParent">
        <img src={"https://i.imgur.com/CJBGl6T.png"} width={75} height={75} />
        {!props.anyUser ? (
          <div className="signingBtns">
            <Button variant="primary" size="lm" onClick={signInACB}>
              Sign in
            </Button>
          </div>
        ) : (
          <>
            <div className="signingBtns">
              <Button variant="primary" size="lm" onClick={signOutACB}>
                Sign out
              </Button>
            </div>
          </>
        )}
        <div className="signingBtns">
          <Button variant="info" size="lm" onClick={aboutButtonACB}>
            About
          </Button>
        </div>
      </div>

      <h3
        style={{
          fontSize: "2.2rem",
          marginBottom: "2rem",
        }}
      >
        Vacation Planner
      </h3>
      {props.anyUser ? (
        <div className="greetingMessage">
          <h5>Logged in as: "{props.userName}"!</h5>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
export default HeaderPageView;
