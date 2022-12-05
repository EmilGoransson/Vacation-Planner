import logo from "./logo.png";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Button from "react-bootstrap/Button";

function HeaderPageView() {
  return (
    <div className="signingViewParent">
      <h1>
        <img src={logo} className="logo" alt="" />
        <div className="signingBtns">
          <Button variant="primary" size="lm" onClick={console.log("Click!")}>
            Sign in!
          </Button>
        </div>
      </h1>
      <h2
        style={{
          fontSize: "2.5rem",
          marginBottom: "2rem",
        }}
      >
        Vacation Planner
      </h2>
    </div>
  );
}
export default HeaderPageView;
