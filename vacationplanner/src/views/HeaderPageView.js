import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Button from "react-bootstrap/Button";
import { Navigate, useNavigate } from "react-router";
/*
@Author Mahdi <mnazari@kth.se>
@Co-Author Emil <emilgo@kth.se>
TODO:
DONE:
*/

function HeaderPageView() {
  const navigate = useNavigate();
  return (
    <div className="signingViewParent">
      <img src={"https://i.imgur.com/CJBGl6T.png"} width={75} height={75} />
      <div className="signingBtns">
        <Button variant="primary" size="lm" onClick={() => navigate("/signin")}>
          Sign in
        </Button>
      </div>
      <div className="signingBtns">
        <Button variant="info" size="lm" onClick={() => navigate("/about")}>
          About
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
    </div>
  );
}
export default HeaderPageView;
