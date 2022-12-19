import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Button from "react-bootstrap/Button";
import { Navigate, useNavigate } from "react-router";
import useAttractionStore from "../model/vacationStore";
/*
@Author Mahdi <mnazari@kth.se>
@Co-Author Emil <emilgo@kth.se>
TODO:
DONE:
*/

function HeaderPageView() {
  const temp = useAttractionStore((state) => state.userEmail);

  const navigate = useNavigate();
  return (
    <div className="signingViewParent">
      <img src={"https://i.imgur.com/CJBGl6T.png"} width={75} height={75} />

      <div className="signingBtns">
        {!temp ? (
          <Button
            variant="primary"
            size="lm"
            onClick={() => navigate("/signin")}
          >
            Sign in
          </Button>
        ) : (
          <>
            <Button
              variant="primary"
              size="lm"
              onClick={() => navigate("/signin")}
            >
              Sign out
            </Button>
            <h5>Welcome {console.log(" " + temp)}</h5>
          </>
        )}
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
