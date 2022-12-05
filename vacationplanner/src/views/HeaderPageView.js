import logo from "./logo.png";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Button from "react-bootstrap/Button";

function HeaderPageView() {
  return (
    <div className="signingViewParent">
      <img src={"https://i.imgur.com/CJBGl6T.png"} width={75} height={75} />
      <h>
        <div className="signingBtns">
          <Button variant="primary" size="lm" onClick={console.log("Click!")}>
            Sign in!
          </Button>
        </div>
      </h>
      <h3
        style={{
          fontSize: "2.2rem",
          marginBottom: "2rem",
        }}
      >
        Vacation Planner
      </h3>
    </div>
  );
}
export default HeaderPageView;
